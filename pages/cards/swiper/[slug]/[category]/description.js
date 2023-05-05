import { useRouter } from "next/router";
import styled from "styled-components";
import StyledNavbar from "../../../../../components/Styled/StyledNavbar";
import TopMenuBar from "../../../../../components/Styled/StyledTopMenuBar";
import useStore from "../../../../../src/store/store";
import Frame from "../../../../../components/Frame";

import StyledSwiper from "../../../../../components/Styled/StyledSwiper";

const StyledCategoryName = styled.div`
  height: 20px;
  position: fixed;
  top: 30px;
  background: ${(p) => p.theme.colorText};
  color: ${(p) => p.theme.colorBackground};
  text-align: center;
  z-index: 10000px;
`;

export default function Description() {
  const router = useRouter();
  const category = router ? router.query.category : 0;
  const slug = router ? router.query.slug : 0;
  const getCardById = useStore((state) => state.getCardById);
  const card = getCardById(slug);
  console.log("router", router.query);
  return (
    card[0] && (
      <Frame>
        <TopMenuBar
          mid={card[0].name}
          backbutton={`/cards/swiper/${slug}/zoom`}
        />

        <StyledCategoryName category={category}>description</StyledCategoryName>

        <StyledSwiper
          category={"description"}
          next={"meaning_up"}
        ></StyledSwiper>

        <StyledNavbar />
      </Frame>
    )
  );
}
