import { useRouter } from "next/router";
import "swiper/swiper-bundle.min.css";

import { Navigation, A11y, Thumbs, Lazy } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { cards } from "../../../../../lib/data";
import styled from "styled-components";
import StyledNavbar from "../../../../../components/Styled/StyledNavbar";
import TopMenuBar from "../../../../../components/Styled/StyledTopMenuBar";
import useStore from "../../../../../src/store/store";
import { useState, useEffect } from "react";

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

const StyledFlexBoxForText = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  height: 80%;
  width: 80%;
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

  useEffect(() => setStoreSlug(slug), []);

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

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
            console.log(event);

            router.replace(`/cards/swiper/${event.realIndex}/description`);
          }}
          grabCursor={true}
          centeredSlides={true}
          initialSlide={slug}
          lazyPreloadPrevNext={1}
        >
          {cards.map((card) => (
            <StyledSwiperSlide key={card.name}>
              <StyledFlexBoxForText>
                <StyledText>{card.desc}</StyledText>
              </StyledFlexBoxForText>
            </StyledSwiperSlide>
          ))}
        </StyledSwiper>
        <StyledNavbar />
      </Frame>
    )
  );
}
