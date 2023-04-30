import { useRouter } from "next/router";
import "swiper/swiper-bundle.min.css";
import { useDoubleTap } from "use-double-tap";
import { Navigation, A11y, Thumbs, Lazy } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { cards } from "../../../../lib/data";
import Image from "next/image";
import styled from "styled-components";
import StyledNavbar from "../../../../components/Styled/StyledNavbar";
import TopMenuBar from "../../../../components/Styled/StyledTopMenuBar";
import useStore from "../../../../src/store/store";
import Link from "next/link";
import { useEffect } from "react";
import CardStats from "../../../../components/Stats/stats";
import CardNotes from "../../../../components/Notes";
import SearchBar from "../../../../components/SearchBar";
import Frame from "../../../../components/Frame";
import ArrowUp from "../../../../components/Styled/ArrowUp";
import ArrowDown from "../../../../components/Styled/ArrowDown";
const StyledImageContainerIndex = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 0.7fr 0.5fr 0.5fr;
  grid-template-columns: 1fr 1fr;
  overflow: auto;
`;

const StyledSwiper = styled(Swiper)`
  display: block;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
  background: black;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled(Image)`
  border-radius: 8px;
  z-index: 100;
  background: ${(p) => p.theme.colorBackground};
`;

const StyledLink = styled(Link)`
  color: ${(p) => p.theme.colorLink};
  background: ${(p) => p.theme.colorText};
  width: 100%;
  text-decoration: none;
  font-size: 1.2em;
  &:active: {
    color: white;
  }
  visibility: hidden;
`;

const ShadowBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  /* opacity: 100%; */
  /* background: black; */
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
  text-overflow: hidden;
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
  text-overflow: hidden;
  overflow: hidden;
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
    console.log(event.target);
  });
  const doubleTapStats = useDoubleTap((event) => {
    router.push(`/cards/swiper/${slug}/stats`);
    console.log(event.target);
  });
  const doubleTapMeaningUp = useDoubleTap((event) => {
    router.push(`/cards/swiper/${slug}/meaning_up`);
    console.log(event.target);
  });
  const doubleTapMeaningRev = useDoubleTap((event) => {
    router.push(`/cards/swiper/${slug}/meaning_rev`);
    console.log(event.target);
  });
  const doubleTapDescription = useDoubleTap((event) => {
    router.push(`/cards/swiper/${slug}/description`);
    console.log(event.target);
  });
  const doubleTapImage = useDoubleTap((event) => {
    router.push(`/cards/swiper/${slug}/zoom`);
    console.log(event.target);
  });

  useEffect(() => setStoreSlug(slug), []);

  return (
    slug && (
      <Frame>
        <TopMenuBar mid={card[0].name} />
        <SearchBar />
        <StyledSwiper
          loop={true}
          speed={300}
          modules={[Thumbs, Navigation, A11y]}
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
                    <StyledText>{card.desc}</StyledText>
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
                    <StyledText>{card.meaning_up}</StyledText>
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
                    <StyledText>{card.meaning_rev}</StyledText>
                  </ShadowBox>
                </StyledTextContainer>

                <StyledTextContainer {...doubleTapStats}>
                  <ShadowBox>
                    <StyledText>
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
                    <StyledText>
                      <CardNotes slug={slug} />
                    </StyledText>
                  </ShadowBox>
                </StyledTextContainer>
              </StyledImageContainerIndex>
            </StyledSwiperSlide>
          ))}
        </StyledSwiper>
        {"overview"}

        <StyledNavbar />
      </Frame>
    )
  );
}
