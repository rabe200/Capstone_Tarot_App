import { useRouter } from "next/router";
import "swiper/swiper-bundle.min.css";
import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { cards } from "../../../../../lib/data";
import Image from "next/image";
import styled from "styled-components";
import StyledNavbar from "../../../../../components/Styled/StyledNavbar";
import TopMenuBar from "../../../../../components/Styled/StyledTopMenuBar";
import useStore from "../../../../../src/store/store";
import Frame from "../../../../../components/Frame";
import { useDoubleTap } from "use-double-tap";
import useSafePush from "../../../../../components/useSafePush";

const StyledImageContainerIndex = styled.div`
  display: block;
  overflow: hidden;
`;

const StyledSwiper = styled(Swiper)`
  display: block;
  position: fixed;
  top: 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
  background: ${(p) => p.theme.colorBackground};
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  background: ${(p) => p.theme.colorBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled(Image)`
  width: 363px;
  height: 565px;
`;

export default function ProductImagesSlider() {
  const router = useRouter();
  const { safePush } = useSafePush();

  const slug = router ? router.query.slug : 0;
  const getCardById = useStore((state) => state.getCardById);
  const card = getCardById(slug);
  const doubleTapImage = useDoubleTap(() => {
    safePush(`/cards/swiper/${slug}`);
  });
  const setStoreSlug = useStore((state) => state.setSlug);
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
          modules={[Navigation, A11y]}
          spaceBetween={250}
          slidesPerView={1}
          navigation={false}
          onSlideChange={(event) => {
            setStoreSlug(event.realIndex);
            router.replace(`/cards/swiper/${event.realIndex}/zoom`);
          }}
          grabCursor={true}
          centeredSlides={true}
          initialSlide={slug}
          lazyPreloadPrevNext={8}
        >
          {cards.map((card) => (
            <StyledSwiperSlide key={card.name}>
              <StyledImageContainerIndex>
                <StyledImage
                  {...doubleTapImage}
                  loading="eager"
                  placeholder="blur"
                  blurDataURL="/images/placeholder.jpg"
                  src={card.image}
                  alt={card.name}
                  width={300}
                  height={527}
                  onDoubleClick={() => safePush(`/cards/swiper/${slug}`)}
                ></StyledImage>
              </StyledImageContainerIndex>
            </StyledSwiperSlide>
          ))}
        </StyledSwiper>
        <StyledNavbar />
      </Frame>
    )
  );
}
