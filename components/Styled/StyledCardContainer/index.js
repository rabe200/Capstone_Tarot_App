import styled from "styled-components";

const StyledCardContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 80%;
  overflow: hidden;
  background: #fcfcfc;
  background: ${(p) => p.theme.colorBackground};
  color: ${(p) => p.theme.colorText};
  border: 5px solid #000000;
  border-top-right-radius: 13px;
  border-top-left-radius: 13px;
  position: relative;
  margin: 0;
  padding: 0;
`;

export default function StyledCardContainer({ children }) {
  return <StyledCardContainer1>{children}</StyledCardContainer1>;
}
