import { useRouter } from "next/router";
import "swiper/swiper-bundle.min.css";

import { Navigation, A11y, Thumbs, Lazy } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { cards } from "../../../../../lib/data";
import styled from "styled-components";
import StyledNavbar from "../../../../../components/Styled/StyledNavbar";
import TopMenuBar from "../../../../../components/Styled/StyledTopMenuBar";
import useStore from "../../../../../src/store/store";
import { useState, useEffect, Fragment } from "react";
import CardStats from "../../../../../components/Stats/stats";
import CardNotes from "../../../../../components/Notes";

const Frame = styled.div`
  background: palevioletred;
  width: 375px;
  height: 667px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledSwiper = styled(Swiper)`
  display: block;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  background: black;
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
  background: black;
  color: white;
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
          navigation={true}
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
              <StyledBoxForText>
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
