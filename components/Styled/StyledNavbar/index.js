import styled from "styled-components";
import Link from "next/link";
import useStore from "../../../src/store/store";
import { useState } from "react";

const StyledMenu = styled.div`
  position: relative;
  bottom: 0;
  width: 100%;
  margin: 0;
  background: #6f6f6f;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 30px;
  grid-template-areas: ". . .";
  justify-content: center;
  align-content: space-evenly;
  justify-items: center;
  align-items: center;
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
  &:hover,
  &:focus {
    color: yellow;
  }
`;

const MenuLink3 = styled(Link)`
  background: palevioletred;
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
  &:hover,
  &:focus {
    color: yellow;
  }
`;

const StyledSpacer = styled.div`
  display: flex;
  color: white;
  width: 100%;
  text-align: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
`;

export default function StyledNavbar() {
  const lastCard = useStore((state) => state.lastCard);
  const [hidden, setHiddenToggle] = useState(true);

  function toggle() {
    if (hidden === false) {
      setHiddenToggle(true);
    } else {
      setHiddenToggle(false);
    }
  }

  return (
    <>
      <div hidden={hidden}>
        <StyledMenu>
          <MenuLink1 hidden={"hidden"} href={`/cards/${lastCard.id}`}>
            CARDS
          </MenuLink1>
          <MenuLink2 href={"/cards/dailycard/moodmeter"}>PLAY</MenuLink2>
          <MenuLink3 href={"/cards/history"}>STATS</MenuLink3>
        </StyledMenu>
      </div>
      <StyledSpacer>
        <div onClick={() => toggle()}>menu</div>
      </StyledSpacer>
    </>
  );
}
