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
import Image from "next/image";

const StyledSwiper = styled(Swiper)`
  display: block;
  position: fixed;
  top: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;

  width: 80%;
  height: 540px;
  top: 0px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: auto;

  @media only screen and (min-width: 834px) {
    width: 834px;
    height: 800px;
  }
`;
const StyledImage = styled(Image)`
  position: sticky;
  top: 20px;
  width: 100px;
  height: 150px;
  align-self: right;
  border-top-left-radius: 4px;
`;

const StyledBoxForText = styled.div`
  position: fixed;
  top: 30px;
  display: flex;
  height: 500px;
  width: 80%;
  justify-content: start;
  overflow: auto;
  border-radius: 8px;
  padding: 5px;
  font-size: 1.2em;

  @media only screen and (min-width: 834px) {
    font-size: 1.4em;
    top: 60px;
    width: 834px;
    height: 800px;
  }
`;

const StyledText = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
  font-size: 1em;
  color: ${(p) => p.theme.colorText};
  text-align: left;
  margin-left: 15px;
  margin-right: 5px;
  padding-left: 10px;
  padding-right: 10px;
`;

const StyledCategoryName = styled.div`
  width: 100%;
  height: 20px;
  position: fixed;
  top: 22px;
  background: ${(p) => p.theme.colorFront};
  color: ${(p) => p.theme.colorBackground};
  text-align: center;
  z-index: 10000px;
`;

const ButtonContainer = styled.div`
  position: fixed;
  bottom: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ToggleButton = styled.div`
  width: 50%;
  height: 18px;
  padding: 10px;
  background: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px white solid;
`;

const ReturnButton = styled.div`
  width: 50%;
  height: 1em;
  padding: 1em;
  background: white;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
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
                <StyledImage
                  src={card.image}
                  width={"200"}
                  height={"350"}
                  alt={card.name}
                />
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
                ) : null}{" "}
              </StyledBoxForText>

              <ButtonContainer>
                <ReturnButton
                  type="button"
                  onClick={() => router.push(`/cards/swiper/${slug}/`)}
                >
                  return
                </ReturnButton>
                <ToggleButton
                  onTouchEnd={() => handleToggle()}
                  onClick={() => handleToggle()}
                >
                  toggle
                </ToggleButton>
              </ButtonContainer>
            </StyledSwiperSlide>
          ))}
        </StyledSwiper>

        <StyledNavbar />
      </Frame>
    )
  );
}
