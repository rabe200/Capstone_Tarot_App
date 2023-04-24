import GlobalStyle from "../styles/styles";
import Layout from "../components/Layout";
import localFont from "@next/font/local";

export const pixelOperator = localFont({
  src: "../styles/fonts/PixelOperatorMono.ttf",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
