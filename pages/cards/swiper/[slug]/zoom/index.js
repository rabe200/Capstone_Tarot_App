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
  height: 90%;
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
  padding-top: 50px;
  width: 285px;
  height: 555px;
`;

export default function CardImagesSlider() {
  if (typeof window !== "undefined") {
    const router = useRouter();
    const { safePush } = useSafePush();

    const slug = router ? router.query.slug : 0;
    const getCardById = useStore((state) => state.getCardById);
    const card = getCardById(slug);

    const doubleTapImage = useDoubleTap(() => {
      disableSwiper();
    });

    function disableSwiper() {
      if (document.body.querySelector(".swiper")) {
        document.body.querySelector(".swiper").swiper.disable();
        safePush(`/cards/swiper/${slug}/category/description`);
      }
    }

    return (
      slug && (
        <Frame>
          <TopMenuBar mid={card[0].name} backbutton={`/`} />

          <StyledSwiper
            enabled={true}
            id={"swiper"}
            loop={true}
            speed={300}
            modules={[Navigation, A11y]}
            spaceBetween={250}
            slidesPerView={1}
            navigation={false}
            onSlideChange={(event) => {
              router.replace(`/cards/swiper/${event.realIndex}/zoom`);
            }}
            grabCursor={true}
            centeredSlides={true}
            initialSlide={slug}
            lazyPreloadPrevNext={8}
          >
            {cards.map((card) => (
              <StyledSwiperSlide key={card.name} id={"swiperSlide"}>
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
                    onDoubleClick={() => disableSwiper()}
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
}
