import { useRouter } from "next/router";
import "swiper/swiper-bundle.min.css";
import { Navigation, A11y, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { cards } from "../../../lib/data";
import Image from "next/image";
import styled from "styled-components";
import StyledNavbar from "../../../components/Styled/StyledNavbar";
import TopMenuBar from "../../../components/Styled/StyledTopMenuBar";
import useStore from "../../../src/store/store";
import { useState, useEffect } from "react";
const StyledImageContainerIndex = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  overflow: auto;
`;

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

export default function SearchResults(props) {
  const router = useRouter();
  const slug = router ? router.query.slug : 0;
  const getCardById = useStore((state) => state.getCardById);
  const card = getCardById(slug);
  const [hasMounted, setHasMounted] = useState(false);
  const searchQuery = useStore((state) => state.searchQuery);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  if (searchQuery === "") {
    return (
      <>
        <p>provide a search term</p>
      </>
    );
  }

  return (
    <Frame>
      <TopMenuBar
        mid={"searchResults"}
        // backbutton={`/cards/swiper/${card.id}`}
      />

      {/* <SearchResults /> */}

      <StyledNavbar />
    </Frame>
  );
}
