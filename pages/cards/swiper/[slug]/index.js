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
import SearchBar from "../../../../components/SearchBar";
import Frame from "../../../../components/Frame";

const StyledImageContainerIndex = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 0.7fr 0.25fr 0.25fr;
  grid-template-columns: 1fr 1fr;
  overflow: auto;
  /* align-items: center; */
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled(Image)`
  padding-top: 20px;

  width: 181px;
  height: 290px;
  border-radius: 8px;
  justify-self: center;
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
`;

const StyledText = styled.div`
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 90%;
  background: ${(p) => p.theme.colorBackground};
  color: ${(p) => p.theme.colorText};
  border: ${(p) => p.theme.border};
  border-radius: 8px;
  text-overflow: hidden;
  overflow: hidden;
  /* box-shadow: 2px 2px 2px 2px silver; */
`;

export default function ProductImagesSlider(props) {
  const router = useRouter();
  const slug = router ? router.query.slug : 0;
  const getCardById = useStore((state) => state.getCardById);
  const card = getCardById(slug);
  const setStoreSlug = useStore((state) => state.setSlug);

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
          navigation={true}
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
                <StyledImage
                  loading="eager"
                  src={card.image}
                  alt={card.name}
                  width={120}
                  height={200}
                  onClick={() => router.push(`/cards/swiper/${slug}/zoom`)}
                ></StyledImage>
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                <StyledText
                  onDoubleClick={(event) =>
                    router.push(event.target.children[0].href)
                  }
                  onTouchEnd={(event) =>
                    router.push(event.target.children[0].href)
                  }
                >
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
                  <StyledLink href={`/cards/swiper/${slug}/stats`}>
                    stats{" "}
                  </StyledLink>
                  <CardStats slug={slug} />
                </StyledText>
                <StyledText>
                  <StyledLink href={`/cards/swiper/${slug}/notes`}>
                    notes
                  </StyledLink>
                  <CardNotes slug={slug} />
                </StyledText>
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
