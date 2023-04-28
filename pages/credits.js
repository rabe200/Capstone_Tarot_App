import AppContainer from "../components/Styled/StyledAppContainer";
import StyledCardContainer from "../components/Styled/StyledCardContainer";
import StyledNavbar from "../components/Styled/StyledNavbar";
import TopMenuBar from "../components/Styled/StyledTopMenuBar";
import styled from "styled-components";
import Link from "next/link";
const StyledCredits = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export default function Credits() {
  return (
    <AppContainer>
      <StyledCardContainer>
        <StyledCredits>
          <h1>developer</h1>
          <li>github: rabe200</li>
          <li>IG: @rabentinte</li>
          <h1>resources</h1>
          <li>
            tarot json grabbed at:
            <Link href={"https://github.com/ekelen/tarot-api"}>ekelen</Link>
          </li>
          <li>
            rider waite tarot scans:
            <Link
              href={
                "https://luciellaes.itch.io/rider-waite-smith-tarot-cards-cc0"
              }
            >
              LuciellaES
            </Link>
          </li>
        </StyledCredits>
      </StyledCardContainer>
      <TopMenuBar mid={"credits"} back={"/"} />
    </AppContainer>
  );
}
