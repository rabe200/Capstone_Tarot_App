import { useRouter } from "next/router";
import "swiper/swiper-bundle.min.css";

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

const Frame = styled.div`
  background: palevioletred;
  width: 375px;
  height: 667px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledImageContainerIndex = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr 0.5fr;
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
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  background: black;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  border: black;
`;

const StyledLink = styled(Link)`
  color: yellow;
`;

const StyledText = styled.div`
  width: 100%;
  height: 100%;
  background: black;
  color: white;
  border: white solid 2px;
  overflow: auto;
`;

export default function ProductImagesSlider(props) {
  const router = useRouter();
  const slug = router ? router.query.slug : 0;
  const getCardById = useStore((state) => state.getCardById);
  const card = getCardById(slug);
  const storeSlug = useStore((state) => state.slug);
  const setStoreSlug = useStore((state) => state.setSlug);

  useEffect(() => setStoreSlug(slug), []);

  return (
    slug && (
      <Frame>
        <TopMenuBar mid={card[0].name} />
        <StyledSwiper
          loop={true}
          speed={300}
          modules={[Thumbs, Navigation, A11y]}
          spaceBetween={250}
          slidesPerView={1}
          navigation={true}
          onSlideChange={(event) => {
            console.log(event);

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
                <StyledImage
                  loading="eager"
                  src={card.image}
                  alt={card.name}
                  width={120}
                  height={200}
                  onClick={() => router.push(`/cards/swiper/${slug}/zoom`)}
                ></StyledImage>
                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                <StyledText>
                  <StyledLink
                    onClick={() => setStoreSlug(slug)}
                    href={`/cards/swiper/${slug}/description`}
                  >
                    Description
                  </StyledLink>
                  {card.desc}
                </StyledText>
                <StyledText>
                  <StyledLink href={`/cards/swiper/${slug}/meaning_up`}>
                    Meaning Up
                  </StyledLink>
                  {card.meaning_up}
                </StyledText>
                <StyledText>
                  <StyledLink href={`/cards/swiper/${slug}/meaning_rev`}>
                    Meaning Reversed
                  </StyledLink>
                  {card.meaning_rev}
                </StyledText>
                <StyledText>
                  <CardStats slug={slug} />
                </StyledText>
                <StyledText>
                  <CardNotes slug={slug} />
                </StyledText>
              </StyledImageContainerIndex>
            </StyledSwiperSlide>
          ))}
        </StyledSwiper>
        <StyledNavbar />
      </Frame>
    )
  );
}
