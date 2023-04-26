import AppContainer from "../components/Styled/StyledAppContainer";
import StyledCardContainer from "../components/Styled/StyledCardContainer";
import StyledNavbar from "../components/Styled/StyledNavbar";
import TopMenuBar from "../components/Styled/StyledTopMenuBar";
import styled from "styled-components";
import { useState, useEffect } from "react";
const StyledOptionsMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export default function FourOhFour() {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const dataPage = getRandomInt(1, 10);
  const dataIndex = getRandomInt(0, 9);
  console.log("page", dataPage);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://catfact.ninja/facts?page=${dataPage}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <AppContainer>
      <TopMenuBar mid={"404"} back={"/"} />
      <StyledCardContainer>
        <StyledOptionsMenu>
          <h1>404 PAGE NOT FOUND</h1>
          {loading && <div>wait a sec...</div>}
          {error && (
            <div>(`there is a problem fetching the cat : ${error}`)</div>
          )}
          <p>{data && data.data[dataIndex].fact}</p>

          <h1>{console.log("data", data)}</h1>
        </StyledOptionsMenu>
      </StyledCardContainer>
      <StyledNavbar />
    </AppContainer>
  );
}
