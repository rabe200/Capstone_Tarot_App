import styled from "styled-components";

const StyledCardContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 95%;
  height: 95%;
  overflow-y: auto;
  background: #fcfcfc;
  border: 5px solid #000000;
  border-radius: 13px;
  position: relative;
  margin: 0;
  padding: 0;
`;

export default function StyledCardContainer({ children }) {
  return <StyledCardContainer1>{children}</StyledCardContainer1>;
}
