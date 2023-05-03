import StyledNavbar from "../components/Styled/StyledNavbar";
import TopMenuBar from "../components/Styled/StyledTopMenuBar";
import styled from "styled-components";
import Link from "next/link";
import Frame from "../components/Frame";
const StyledCredits = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  height: 80%;
  color: ${(p) => p.theme.colorText};
  background: ${(p) => p.theme.colorBackground};
`;

export default function Credits() {
  return (
    <Frame>
      <TopMenuBar mid={"OPTIONS"} />
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
      <StyledNavbar />
    </Frame>
  );
}
