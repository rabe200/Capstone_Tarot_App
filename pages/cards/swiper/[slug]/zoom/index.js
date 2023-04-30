import "swiper/swiper-bundle.min.css";
import { useRouter } from "next/router";
import { Navigation, Scrollbar, A11y, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import styled from "styled-components";
import StyledNavbar from "../../../../../components/Styled/StyledNavbar";
import TopMenuBar from "../../../../../components/Styled/StyledTopMenuBar";
import useStore from "../../../../../src/store/store";

// const sharp = require("sharp");

const Frame = styled.div`
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
  border: 2px solid black;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  border: 2px solid black;
  border-radius: 8px;
`;

export default function ProductImagesSlider(props) {
  const router = useRouter();
  const slug = router ? router.query.slug : 0;
  const getCardById = useStore((state) => state.getCardById);
  const card = getCardById(slug);
  const cards = useStore((state) => state.allCards);

  return slug ? (
    <Frame>
      <TopMenuBar mid={card[0].name} />

      <StyledSwiper
        loop={true}
        speed={667}
        modules={[Thumbs, Navigation, Scrollbar, A11y]}
        spaceBetween={250}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwipe={(swiper) => console.log(swiper)}
        onSlideChange={(event) => {
          console.log("slide change", event.realIndex);
          router.replace(`/cards/swiper/${event.realIndex}/zoom`);
        }}
        grabCursor={true}
        centeredSlides={true}
        initialSlide={slug}
        lazyPreloadPrevNext={8}
      >
        {cards.map((card) => (
          <StyledSwiperSlide key={card.name}>
            <StyledImage
              priority
              placeholder="blur"
              blurDataURL="/images/placeholder.jpg"
              src={card.image}
              alt={card.name}
              width={300}
              height={450}
              onClick={() => router.push(`/cards/swiper/${slug}`)}
            ></StyledImage>
          </StyledSwiperSlide>
        ))}
      </StyledSwiper>
      <StyledNavbar />
    </Frame>
  ) : (
    <p>
      {"where is my slug"}
      {console.log()}
    </p>
  );
}
