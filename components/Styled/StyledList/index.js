import styled from "styled-components";

const GoodList = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  color: ${(p) => p.theme.colorText};
  border: ${(p) => p.theme.colorText} 4px solid;
  background: ${(p) => p.theme.colorFront};
  height: 90%;
  overflow: auto;
  border-radius: 8px;
  overflow-wrap: break-word;
  width: 100%;
  height: 100%;
  min-height: 100%;
  font-size: 1.3em;
`;

export default function StyledList({ children }) {
  return (
    <>
      <GoodList>{children}</GoodList>
    </>
  );
}
