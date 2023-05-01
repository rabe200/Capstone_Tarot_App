import { useRouter } from "next/router";
import "swiper/swiper-bundle.min.css";
import { useDoubleTap } from "use-double-tap";
import { useState } from "react";
import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { cards } from "../../../../../lib/data";
import styled from "styled-components";
import StyledNavbar from "../../../../../components/Styled/StyledNavbar";
import TopMenuBar from "../../../../../components/Styled/StyledTopMenuBar";
import useStore from "../../../../../src/store/store";
import { useEffect } from "react";
import CardStats from "../../../../../components/Stats/stats";
import CardNotes from "../../../../../components/Notes";
import Frame from "../../../../../components/Frame";
import SearchBar from "../../../../../components/SearchBar";

const StyledSwiper = styled(Swiper)`
  display: block;
  position: fixed;
  top: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
  text-align: center;
  overflow: hidden;
  background: ${(p) => p.theme.colorContainer};
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

const StyledBoxForText = styled.div`
  display: grid;
  height: 80%;
  width: 80%;
  padding: 20px;
  background: ${(p) => p.theme.colorFront};
  overflow: auto;
`;

const StyledText = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1.4em;
  background: ${(p) => p.theme.colorBackground};
  color: ${(p) => p.theme.colorText};
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const StyledCategoryName = styled.div`
  width: 100%;
  height: 20px;
  position: fixed;
  bottom: 80px;
  text-align: center;
  z-index: 10000px;
`;

const ToggleButton = styled.div`
  width: 4rem;
  height: 1em;
  padding: 1em;
  background: black;
`;

export default function Category() {
  const router = useRouter();
  const slug = router ? router.query.slug : 0;
  const getCardById = useStore((state) => state.getCardById);
  const card = getCardById(slug);
  const setStoreSlug = useStore((state) => state.setSlug);
  const category = router ? router.query.category : 0;
  const doubleTap = useDoubleTap((event) => {
    router.push(`/cards/swiper/${slug}`);
    console.log(event.target);
  });
  const [toggleCategory, setToggleCategory] = useState(category);

  function handleToggle() {
    if (category === "description") setToggleCategory("meaning_up");
    else if (category === "meaning_up") setToggleCategory("meaning_rev");
    else if (category === "meaning_rev") setToggleCategory("stats");
    else if (category === "stats") setToggleCategory("notes");
    else if (category === "notes") setToggleCategory("description");
    router.push(`/cards/swiper/${slug}/${toggleCategory}`);
  }

  useEffect(() => setStoreSlug(slug), []);

  return (
    slug && (
      <Frame>
        <TopMenuBar
          mid={card[0].name}
          backbutton={`/cards/swiper/${card[0].id}`}
        />
        <StyledCategoryName> {category}</StyledCategoryName>

        <StyledSwiper
          loop={true}
          speed={300}
          modules={[Navigation, A11y]}
          spaceBetween={250}
          slidesPerView={1}
          navigation={false}
          onSlideChange={(event) => {
            router.replace(`/cards/swiper/${event.realIndex}/${category}`);
          }}
          grabCursor={true}
          centeredSlides={true}
          initialSlide={slug}
          lazyPreloadPrevNext={1}
        >
          {cards.map((card) => (
            <StyledSwiperSlide key={card.name}>
              <StyledBoxForText
                {...doubleTap}
                onDoubleClick={() => router.push(`/cards/swiper/${slug}/`)}
              >
                {category === "description" ? (
                  <StyledText>{card.desc}</StyledText>
                ) : category === "meaning_up" ? (
                  <StyledText>{card.meaning_up}</StyledText>
                ) : category === "meaning_rev" ? (
                  <StyledText>{card.meaning_rev}</StyledText>
                ) : category === "stats" ? (
                  <StyledText>
                    <CardStats slug={slug} />
                  </StyledText>
                ) : category === "notes" ? (
                  <StyledText>
                    <CardNotes slug={slug} />
                  </StyledText>
                ) : null}
              </StyledBoxForText>
              <button
                type="button"
                onClick={() => router.push(`/cards/swiper/${slug}/`)}
              >
                return
              </button>
              <ToggleButton
                onTouchEnd={() => handleToggle()}
                onClick={() => handleToggle()}
              >
                toggle
              </ToggleButton>
            </StyledSwiperSlide>
          ))}
        </StyledSwiper>

        <SearchBar />
        <StyledNavbar />
      </Frame>
    )
  );
}
