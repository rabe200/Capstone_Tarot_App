import styled from "styled-components";

const StyledFrame = styled.main`
  position: fixed;
  background: ${(p) => p.theme.colorBackground};
  width: 100%;
  height: 540px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;

  @media only screen and (min-width: 414px) {
    height: 896px;
  }

  @media only screen and (min-width: 768px) {
    height: 1024px;
  }

  @media only screen and (min-width: 820px) {
    height: 1180px;
  }
`;

export default function Frame({ children }) {
  return <StyledFrame>{children}</StyledFrame>;
}
