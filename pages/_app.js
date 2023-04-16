import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  // const [searchQuery, setSearchQuery] = useLocalStorageState("");

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
