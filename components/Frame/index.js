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

  @media only screen and (min-width: 390px) {
    width: 410px;
    height: 769px;
  }

  @media only screen and (min-width: 414px) {
    width: 414px;
    min-height: 769px;
  }

  @media only screen and (min-width: 585px) {
    width: 585px;
    min-height: 1161px;
    font-size: 1.2em;
  }

  @media only screen and (min-width: 834px) {
    width: 834px;
  }

  @media only screen and (min-width: 1194px) {
    width: 1194px;
  }
`;

export default function Frame({ children }) {
  return <StyledFrame>{children}</StyledFrame>;
}
