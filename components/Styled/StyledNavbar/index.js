import styled from "styled-components";
import Link from "next/link";
import useStore from "../../../src/store/store";
import { useState } from "react";
import { useRouter } from "next/router";
const StyledSpace = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  height: 45px;
  margin: 0;
  padding: 0;
  width: 375px;
  z-index: 1000;

  @media only screen and (min-width: 390px) {
    width: 410px;
  }

  @media only screen and (min-width: 414px) {
    width: 414px;
  }

  @media only screen and (min-width: 585px) {
    width: 585px;
  }
  @media only screen and (min-width: 834px) {
    width: 834px;
  }
  @media only screen and (min-width: 1194px) {
    width: 1194px;
  }
  @media only screen and (min-width: 1400px) {
    width: 1400px;
  }
`;

const StyledMenu = styled.div`
  bottom: 0;
  width: 100%;
  background: #6f6f6f;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100%;
  grid-template-areas: ". . .";
  justify-content: center;
  align-content: space-evenly;
  justify-items: center;
  align-items: center;
  border-radius: 8px;
`;

const MenuLink1 = styled(Link)`
  background: yellow;
  text-decoration: none;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  margin: 0.3rem 0;
  color: #04120e;

  &:hover,
  &:focus {
    color: magenta;
  }
`;

const MenuLink2 = styled(Link)`
  background: aqua;
  text-decoration: none;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  gap: 20rem;
  margin: 0.3rem 0;
  color: #04120e;

  border-bottom-left-radius: 8px;

  &:hover,
  &:focus {
    color: yellow;
  }
`;

const MenuLink3 = styled(Link)`
  background: magenta;
  text-decoration: none;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  gap: 20rem;
  margin: 0.3rem 0;
  color: #04120e;

  border-bottom-right-radius: 8px;
  &:hover,
  &:focus {
    color: yellow;
  }
`;

export default function StyledNavbar() {
  const [hidden, setHiddenToggle] = useState(false);
  const setLastPageVisited = useStore((state) => state.setLastPageVisited);
  const setComingFromHistory = useStore((state) => state.setComingFromHistory);
  const router = useRouter();
  const queryName = router.query.optionSelect;
  const storeSlug = useStore((state) => state.slug);

  function resetComingFromHistory() {
    setComingFromHistory(false);
    setLastPageVisited(queryName);
  }

  return (
    <StyledSpace>
      <div hidden={hidden}>
        <StyledMenu>
          <MenuLink2
            onClick={() => resetComingFromHistory()}
            href={"/cards/dailycard/moodmeter"}
          >
            PLAY
          </MenuLink2>
          <MenuLink1
            onClick={() => resetComingFromHistory()}
            hidden={"hidden"}
            href={`/cards/swiper/${
              router.query.slug
                ? router.query.slug
                : storeSlug
                ? storeSlug
                : "0"
            }/zoom`}
          >
            CARDS
          </MenuLink1>
          <MenuLink3 href={"/cards/history"}>NOTES</MenuLink3>
        </StyledMenu>
      </div>
    </StyledSpace>
  );
}
