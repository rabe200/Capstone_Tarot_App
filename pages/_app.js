import GlobalStyle from "../styles/styles";
import Layout from "../components/Layout";
import localFont from "@next/font/local";
import { Orbitron } from "next/font/google";
import { Press_Start_2P } from "next/font/google";

export const orbitron = Orbitron({ weight: "400", subsets: ["latin"] });
export const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["cyrillic", "cyrillic-ext", "greek", "latin", "latin-ext"],
});
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
