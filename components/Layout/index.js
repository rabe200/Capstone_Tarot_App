import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import useStore from "../../src/store/store";

const StyledMain = styled.main`
  display: flex;
  position: relative;
  width: 320px;
  height: 480px;
  background: ${(p) => p.theme.colorBackground};
  color: ${(p) => p.theme.colorText};
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  border-radius: 8px;
  @media only screen and (min-width: 360px) {
    width: 360px;
    height: 740px;
  }

  @media only screen and (min-width: 375px) {
    width: 375px;
    height: 667px;
  }

  @media only screen and (min-width: 390px) {
    width: 390px;
    height: 844px;
  }

  @media only screen and (min-width: 393px) {
    width: 393px;
    height: 851px;
  }

  @media only screen and (min-width: 412px) {
    width: 412px;
    height: 915px;
  }

  @media only screen and (min-width: 414px) {
    width: 414px;
    height: 896px;
  }

  @media only screen and (min-width: 540px) {
    width: 540px;
    height: 720px;
  }

  @media only screen and (min-width: 768px) {
    width: 768px;
    height: 1024px;
  }
`;

export default function Layout({ children }) {
  const localTheme = useStore((state) => state.theme);
  return (
    <>
      <ThemeProvider theme={localTheme}>
        <StyledMain>{children}</StyledMain>
      </ThemeProvider>
    </>
  );
}
