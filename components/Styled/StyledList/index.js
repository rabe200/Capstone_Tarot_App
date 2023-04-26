import styled from "styled-components";

const GoodList = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  background: ${(p) => p.theme.colorBackground};
  color: ${(p) => p.theme.colorText};
  height: 90%;
  overflow: auto;
  border-radius: 8px;
  overflow-wrap: break-word;
  width: 100%;
  height: 100%;
  min-height: 100%;
`;

export default function StyledList({ children }) {
  return (
    <>
      <GoodList>{children}</GoodList>
    </>
  );
}
