import styled from "styled-components";

const StyledFrame = styled.div`
  position: fixed;
  background: ${(p) => p.theme.colorContainer};
  width: 375px;
  height: 614px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;

  @media only screen and (min-width: 414px) {
    width: 414px;
    height: 896px;
  }

  @media only screen and (min-width: 768px) {
    width: 768px;
    height: 1024px;
  }
`;

export default function Frame({ children }) {
  return <StyledFrame>{children}</StyledFrame>;
}
