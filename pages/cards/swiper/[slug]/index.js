import { useRouter } from "next/router";
import "swiper/swiper-bundle.min.css";
import { useDoubleTap } from "use-double-tap";
import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { cards } from "../../../../lib/data";
import Image from "next/image";
import styled from "styled-components";
import StyledNavbar from "../../../../components/Styled/StyledNavbar";
import TopMenuBar from "../../../../components/Styled/StyledTopMenuBar";
import useStore from "../../../../src/store/store";
import { useEffect } from "react";
import CardStats from "../../../../components/Stats/stats";
import CardNotes from "../../../../components/Notes";
import Frame from "../../../../components/Frame";
import ArrowUp from "../../../../components/Styled/ArrowUp";
import ArrowDown from "../../../../components/Styled/ArrowDown";

const StyledImageContainerIndex = styled.div`
  overflow: auto;
  position: fixed;
  top: 0px;
  width: 375px;
  height: 567px;
  display: grid;
  grid-template-rows: 0.7fr 0.4fr 0.2fr;
  grid-template-columns: 0.7fr 1fr;
  overflow: auto;
`;

const StyledSwiper = styled(Swiper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 375px;
  height: 567px;
  text-align: center;
  background: black;
  position: fixed;
  top: 20px;
  @media only screen and (min-width: 414px) {
    width: 414px;
  }

  @media only screen and (min-width: 585px) {
    width: 585px;

    font-size: 1.2em;
  }

  @media only screen and (min-width: 834px) {
    width: 834px;
  }

  @media only screen and (min-width: 1194px) {
    width: 1194px;
  }
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 414px) {
    width: 414px;
  }

  @media only screen and (min-width: 585px) {
    width: 585px;

    font-size: 1.2em;
  }

  @media only screen and (min-width: 834px) {
    width: 834px;
  }
`;

const StyledImage = styled(Image)`
  border-radius: 8px;
  z-index: 100;
  background: ${(p) => p.theme.colorBackground};
`;

const ShadowBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  box-shadow: inset 1px 0px 10px 1px ${(p) => p.theme.colorLink},
    inset -1px 0px 10px 1px ${(p) => p.theme.colorLink};
`;

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: auto;
  align-items: center;
  width: 90%;
  height: 80%;
  overflow: hidden;
  opacity: 85%;
`;
const StyledTextContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  background: ${(p) => p.theme.colorBackground};
  color: ${(p) => p.theme.colorText};
  border: ${(p) => p.theme.border};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: inset 2px 2px 100px 1px ${(p) => p.theme.colorBackground},
    inset -2px -2px 10px 10px ${(p) => p.theme.colorLink};
`;

const StyledImageContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  background: ${(p) => p.theme.colorBackground};
  color: ${(p) => p.theme.colorText};
  border: ${(p) => p.theme.border};
  border-radius: 8px;
  box-shadow: inset 2px 2px 100px 1px ${(p) => p.theme.colorBackground},
    inset -2px -2px 10px 10px ${(p) => p.theme.colorLink};
`;

export default function ProductImagesSlider(props) {
  const router = useRouter();
  const slug = router ? router.query.slug : 0;
  const getCardById = useStore((state) => state.getCardById);
  const card = getCardById(slug);
  const setStoreSlug = useStore((state) => state.setSlug);
  const doubleTapNotes = useDoubleTap((event) => {
    router.push(`/cards/swiper/${slug}/notes`);
  });
  const doubleTapStats = useDoubleTap((event) => {
    router.push(`/cards/swiper/${slug}/stats`);
  });
  const doubleTapMeaningUp = useDoubleTap((event) => {
    router.push(`/cards/swiper/${slug}/meaning_up`);
  });
  const doubleTapMeaningRev = useDoubleTap((event) => {
    router.push(`/cards/swiper/${slug}/meaning_rev`);
  });
  const doubleTapDescription = useDoubleTap((event) => {
    router.push(`/cards/swiper/${slug}/description`);
  });
  const doubleTapImage = useDoubleTap((event) => {
    router.push(`/cards/swiper/${slug}/zoom`);
  });

  useEffect(() => setStoreSlug(slug), []);

  return (
    slug && (
      <Frame>
        <StyledSwiper
          loop={true}
          speed={300}
          modules={[Navigation, A11y]}
          spaceBetween={250}
          slidesPerView={1}
          navigation={false}
          onSlideChange={(event) => {
            router.replace(`/cards/swiper/${event.realIndex}`);
          }}
          grabCursor={true}
          centeredSlides={true}
          initialSlide={slug}
          lazyPreloadPrevNext={1}
        >
          {cards.map((card) => (
            <StyledSwiperSlide key={card.name}>
              <StyledImageContainerIndex>
                <StyledImageContainer>
                  <ShadowBox>
                    <StyledImage
                      {...doubleTapImage}
                      id="StyledImage"
                      loading="eager"
                      src={card.image}
                      alt={card.name}
                      width={120}
                      height={200}
                      onDoubleClick={() =>
                        router.push(`/cards/swiper/${slug}/zoom`)
                      }
                    />
                  </ShadowBox>
                </StyledImageContainer>
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />

                <StyledTextContainer
                  {...doubleTapDescription}
                  onDoubleClick={() =>
                    router.push(`/cards/swiper/${slug}/description`)
                  }
                >
                  <ShadowBox>
                    <StyledText id="styledDescription">{card.desc}</StyledText>
                  </ShadowBox>
                </StyledTextContainer>

                <StyledTextContainer
                  {...doubleTapMeaningUp}
                  onDoubleClick={() =>
                    router.push(`/cards/swiper/${slug}/meaning_up`)
                  }
                >
                  <ShadowBox>
                    <ArrowUp />
                    <StyledText id="styledMeaningUp">
                      {card.meaning_up}
                    </StyledText>
                  </ShadowBox>
                </StyledTextContainer>

                <StyledTextContainer
                  {...doubleTapMeaningRev}
                  onDoubleClick={() =>
                    router.push(`/cards/swiper/${slug}/meaning_rev`)
                  }
                >
                  <ShadowBox>
                    <ArrowDown />
                    <StyledText id="styledMeaningRev">
                      {card.meaning_rev}
                    </StyledText>
                  </ShadowBox>
                </StyledTextContainer>

                <StyledTextContainer
                  {...doubleTapStats}
                  onDoubleClick={() =>
                    router.push(`/cards/swiper/${slug}/stats`)
                  }
                >
                  <ShadowBox>
                    <StyledText id="styledStats">
                      <CardStats slug={slug} />
                    </StyledText>
                  </ShadowBox>
                </StyledTextContainer>

                <StyledTextContainer
                  {...doubleTapNotes}
                  onDoubleClick={() =>
                    router.push(`/cards/swiper/${slug}/notes`)
                  }
                >
                  <ShadowBox>
                    <StyledText id="styledNotes">
                      <CardNotes slug={slug} />
                    </StyledText>
                  </ShadowBox>
                </StyledTextContainer>
              </StyledImageContainerIndex>
            </StyledSwiperSlide>
          ))}
        </StyledSwiper>
        <TopMenuBar mid={card[0].name} />
        <StyledNavbar />
      </Frame>
    )
  );
}
