import styled from "styled-components";

const StyledCardContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  overflow: auto;
  position: relative;
  background: ${(p) => p.theme.colorBackground};
  color: ${(p) => p.theme.colorText};
  margin: 0;
  padding: 0;
`;

export default function StyledCardContainer({ children }) {
  return <StyledCardContainer1>{children}</StyledCardContainer1>;
}
