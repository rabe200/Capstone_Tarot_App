import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  position: relative;
  width: 375px;
  height: 667px;
  background: #c5c3c3;
  justify-content: center;
  align-items: center;
`;

export default function Layout({ children }) {
  return (
    <>
      <StyledMain>{children}</StyledMain>
    </>
  );
}
