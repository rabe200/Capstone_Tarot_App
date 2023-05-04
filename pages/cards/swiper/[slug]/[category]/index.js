import { useRouter } from "next/router";
import "swiper/swiper-bundle.min.css";
import { useState } from "react";
import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { cards } from "../../../../../lib/data";
import styled from "styled-components";
import StyledNavbar from "../../../../../components/Styled/StyledNavbar";
import TopMenuBar from "../../../../../components/Styled/StyledTopMenuBar";
import useStore from "../../../../../src/store/store";
import useSafePush from "../../../../../components/useSafePush";
import Frame from "../../../../../components/Frame";
import Image from "next/image";
import Overflow from "../../../../../components/OverFlowIndicator";
import { useEffect } from "react";
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

const StyledSwiper = styled(Swiper)`
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
  }

  @media only screen and (min-width: 585px) {
    width: 585px;
    font-size: 1.2em;
  }

  @media only screen and (min-width: 834px) {
    width: 834px;
    font-size: 1.3em;
  }

  @media only screen and (min-width: 1194px) {
    width: 1194px;
    font-size: 1.4em;
  }
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

const StyledCategoryName = styled.div`
  height: 20px;
  position: fixed;
  top: 30px;
  right: ${(p) => (p.category === "meaning_up" ? "0" : "null")};
  left: ${(p) => (p.category === "meaning_rev" ? "0" : "null")};
  background: ${(p) => p.theme.colorText};
  color: ${(p) => p.theme.colorBackground};
  text-align: center;
  z-index: 10000px;
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

const ToggleButton = styled.div`
  width: 25%;
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

export default function Category() {
  const router = useRouter();
  const slug = router ? router.query.slug : 0;
  const getCardById = useStore((state) => state.getCardById);
  const card = getCardById(slug);
  const [category, setCategory] = useState("description");
  const { safePush } = useSafePush();

  function handleToggle() {
    if (category === "description") {
      setCategory("meaning_up");
      router.replace(`/cards/swiper/${slug}/description`);
    } else if (category === "meaning_up") {
      setCategory("meaning_rev");
      router.replace(`/cards/swiper/${slug}/meaning_up`);
    } else if (category === "meaning_rev") {
      setCategory("description");
      router.replace(`/cards/swiper/${slug}/meaning_rev`);
    }
  }

  // useEffect(() => {
  //   if (category === "description") {
  //     router.replace(`/cards/swiper/${slug}/description`);
  //   } else if (category === "meaning_up") {
  //     router.replace(`/cards/swiper/${slug}/meaning_up`);
  //   } else if (category === "meaning_rev") {
  //     router.replace(`/cards/swiper/${slug}/meaning_rev`);
  //   }
  // }, [category]);

  function displayCategory() {
    if (category === "description") {
      return card[0].desc;
    }
    if (category === "meaning_up") {
      return card[0].meaning_up;
    }
    if (category === "meaning_rev") {
      return card[0].meaning_rev;
    }
  }

  const display = displayCategory();

  return (
    slug && (
      <Frame>
        <TopMenuBar
          mid={card[0].name}
          backbutton={`/cards/swiper/${slug}/zoom`}
        />

        <StyledCategoryName category={category}> {category}</StyledCategoryName>

        <StyledSwiper
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
              <StyledBoxForText
                onDoubleClick={() => safePush(`/cards/swiper/${slug}/zoom`)}
              >
                <StyledImage
                  src={card.image}
                  width={"200"}
                  height={"350"}
                  alt={card.name}
                />

                <StyledOverFlow>
                  <Overflow.Content>
                    <StyledText>{display}</StyledText>{" "}
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
              </StyledBoxForText>

              <ButtonContainer>
                <ReturnButton
                  type="button"
                  onClick={() => safePush(`/cards/swiper/${slug}/zoom`)}
                >
                  return
                </ReturnButton>
                <ToggleButton
                  onTouchEnd={() => handleToggle()}
                  onClick={() => handleToggle()}
                >
                  toggle
                </ToggleButton>
                <button
                  type="button"
                  onClick={() =>
                    document.body.querySelector(".swiper").swiper.disable()
                  }
                >
                  disable
                </button>
                <button
                  type="button"
                  onClick={() =>
                    document.body.querySelector(".swiper").swiper.enable()
                  }
                >
                  enable
                </button>
              </ButtonContainer>
            </StyledSwiperSlide>
          ))}
        </StyledSwiper>

        <StyledNavbar />
      </Frame>
    )
  );
}
