import styled from "styled-components";

const StyledFrame = styled.div`
  position: fixed;
  background: ${(p) => p.theme.colorBackground};
  width: 375px;
  height: 567px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  overflow: hidden;

  @media only screen and (min-width: 414px) {
    width: 414px;
    height: 769px;
  }

  @media only screen and (min-width: 585px) {
    width: 585px;
    height: 1161px;
    font-size: 1.2em;
  }

  @media only screen and (min-width: 834px) {
    width: 834px;
    height: 800px;
  }

  @media only screen and (min-width: 1194px) {
    width: 1194px;
    height: 834px;
  }
`;

export default function Frame({ children }) {
  return <StyledFrame>{children}</StyledFrame>;
}
