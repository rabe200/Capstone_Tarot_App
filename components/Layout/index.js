import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  position: relative;
  width: 375px;
  height: 667px;
  background: #c5c3c3;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const StyledBody = styled.body`
  display: flex;
  flex-direction: column;
  margin: 0;
  font-family: system-ui;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Layout({ children }) {
  return (
    <>
      <StyledMain>{children}</StyledMain>
    </>
  );
}
