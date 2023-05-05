import styled from "styled-components";
import "swiper/swiper-bundle.min.css";
import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/router";
import useSafePush from "../../useSafePush";
import { cards } from "../../../lib/data";
import Image from "next/image";
import Overflow from "react-overflow-indicator";
import Link from "next/link";

const StyledSwiperElement = styled(Swiper)`
  display: flex;
  position: fixed;
  top: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 99%;
  text-align: center;

  @media only screen and (min-width: 390px) {
    width: 390px;
  }

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
  width: 99%;
  height: 99%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled(Image)`
  position: sticky;
  padding-left: 15px;
  top: 20px;
  width: 100px;
  height: 150px;
  align-self: right;
  border-top-left-radius: 4px;
`;

const StyledBoxForText = styled.div`
  position: fixed;
  top: 30px;
  display: flex;
  height: 500px;
  width: 100%;
  justify-content: start;
  border-radius: 8px;
  padding: 5px;
  font-size: 1.2em;
  @media only screen and (min-width: 390px) {
    width: 410px;
    height: 97%;
  }

  @media only screen and (min-width: 414px) {
    width: 414px;
    font-size: 1.1em;
    max-height: 80%;
  }

  @media only screen and (min-width: 585px) {
    width: 585px;
    font-size: 1.2em;
    max-height: 80%;
  }

  @media only screen and (min-width: 834px) {
    width: 834px;
    font-size: 1.3em;
    max-height: 80%;
  }

  @media only screen and (min-width: 1194px) {
    width: 1194px;
    font-size: 1.4em;
  }
`;

const StyledOverFlow = styled(Overflow)`
  height: 70%;

  @media only screen and (min-width: 390px) {
    height: 75%;
  }

  @media only screen and (min-width: 414px) {
    height: 80%;
  }

  @media only screen and (min-width: 585px) {
    height: 90%;
    font-size: 1.2em;
  }

  @media only screen and (min-width: 834px) {
    height: 100%;
    width: 834px;
  }

  @media only screen and (min-width: 1194px) {
    width: 1194px;
  }
`;

const OverFlowIndicatorIcon = styled.div`
  position: absolute;
  right: 10px;
  bottom: 0px;
  font-size: 2em;
  opacity: 77%;
  color: ${(props) => props.theme.colorAscii};
`;

const StyledText = styled.div`
  display: flex;
  font-size: 1em;
  color: ${(p) => p.theme.colorText};
  text-align: left;
  margin-left: 15px;
  margin-right: 5px;
  padding-left: 10px;
  padding-right: 10px;
`;

const ButtonContainer = styled.div`
  position: fixed;
  bottom: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  width: 70%;
  height: 45px;
  padding: 10px;
  background: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px white solid;
`;

const ReturnButton = styled.div`
  width: 25%;
  height: 1em;
  padding: 1em;
  background: white;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export default function StyledSwiper({ category, next }) {
  const router = useRouter();
  const slug = router ? router.query.slug : 0;
  const { safePush } = useSafePush();
  function disableSwiper() {
    document.body.querySelector(".swiper") &&
      document.body.querySelector(".swiper").swiper.disable();
  }

  return (
    <StyledSwiperElement
      enabled={true}
      loop={true}
      speed={300}
      modules={[Navigation, A11y]}
      spaceBetween={250}
      slidesPerView={1}
      navigation={false}
      grabCursor={true}
      centeredSlides={true}
      initialSlide={slug}
      lazyPreloadPrevNext={1}
    >
      {cards.map((card) => (
        <StyledSwiperSlide key={card.name}>
          <StyledBoxForText>
            <StyledImage
              src={card.image}
              width={"200"}
              height={"350"}
              alt={card.name}
            />
            <StyledOverFlow>
              <Overflow.Content>
                {category === "description" ? (
                  <StyledText>{card.desc}</StyledText>
                ) : category === "meaning_up" ? (
                  <StyledText>{card.meaning_up}</StyledText>
                ) : category === "meaning_rev" ? (
                  <StyledText>{card.meaning_rev}</StyledText>
                ) : null}
              </Overflow.Content>
              <Overflow.Indicator direction={"down"}>
                {(canScroll, refs) => (
                  <OverFlowIndicatorIcon
                    type="button"
                    onClick={() => {
                      refs.viewport.current.scrollBy({
                        top: refs.viewport.current.clientHeight,
                        behaviour: "smooth",
                      });
                    }}
                  >
                    {canScroll ? "ᛨ" : "ᛝ"}
                  </OverFlowIndicatorIcon>
                )}
              </Overflow.Indicator>{" "}
            </StyledOverFlow>
            <ButtonContainer>
              <ReturnButton
                type="button"
                onClick={() => safePush(`/cards/swiper/${slug}/zoom`)}
              >
                return
              </ReturnButton>
              <StyledLink
                onClick={() => disableSwiper()}
                href={`/cards/swiper/${slug}/category/${next}`}
              >
                next
              </StyledLink>
            </ButtonContainer>
          </StyledBoxForText>
        </StyledSwiperSlide>
      ))}
    </StyledSwiperElement>
  );
}
