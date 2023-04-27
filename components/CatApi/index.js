import styled from "styled-components";
import { useState, useEffect } from "react";
const CatApiRender = styled.article`
  display: flex;
  border: 2px solid black;
`;

export default function CatApi() {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const dataPage = getRandomInt(1, 10);
  const dataIndex = getRandomInt(0, 9);

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
    <CatApiRender>
      {loading && <div>wait a sec...</div>}
      {error && <div>(`there is a problem fetching the cat : ${error}`)</div>}
      <p>{data && data.data[dataIndex].fact}</p>
    </CatApiRender>
  );
}
