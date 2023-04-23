import styled from "styled-components";

const GoodList = styled.div`
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: black;
  color: white;
  height: 90%;
  overflow: scroll;
  border-radius: 8px;
`;

export default function StyledList({ children }) {
  return (
    <>
      <GoodList>{children}</GoodList>
    </>
  );
}
