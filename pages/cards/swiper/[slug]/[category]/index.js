import { useRouter } from "next/router";
import "swiper/swiper-bundle.min.css";
import { useDoubleTap } from "use-double-tap";

import { Navigation, A11y, Thumbs, Lazy } from "swiper";
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

const StyledSwiper = styled(Swiper)`
  display: block;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
  overflow: hidden;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  background: ${(p) => p.theme.colorContainer};
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
  overflow: auto;
`;

const StyledText = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1.4em;
  background: ${(p) => p.theme.colorBackground};
  color: ${(p) => p.theme.colorText};
  border: white solid 2px;
  display: flex;
  flex-direction: column;
  overflow: auto;
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

  useEffect(() => setStoreSlug(slug), []);

  return (
    slug && (
      <Frame>
        <TopMenuBar
          mid={card[0].name}
          backbutton={`/cards/swiper/${card[0].id}`}
        />
        <StyledSwiper
          loop={true}
          speed={300}
          modules={[Thumbs, Navigation, A11y]}
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
            </StyledSwiperSlide>
          ))}
        </StyledSwiper>
        {category}

        <StyledNavbar />
      </Frame>
    )
  );
}
