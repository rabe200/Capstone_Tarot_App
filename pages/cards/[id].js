import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";
import { getAllCards } from "../../lib/data";

export const CardBody = styled.div`
  height: 500px;
  width: 300px;
  background-color: crimson;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Platzhalter = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  height: 400px;
  width: 300px;
`;

export const NameBanner = styled.h2`
  background-color: white;
  width: 90%;
  text-align: center;
`;

export default function KartenAnzeige({ fetcher }) {
  const [randomNumber, setRandomNumber] = useState("0");
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, error } = useSWR(
    id ? `/api/tarot/${id}` : null,
    fetcher
  );

  function RandomCard() {
    {
      getAllCards();
    }
    setRandomNumber(Math.floor(Math.random() * 77 + 0));
    router.push(`${randomNumber}`);
  }

  if (isLoading) return <>isLoading</>;
  if (error) return <>error</>;
  if (data) {
    return (
      <>
        <CardBody>
          <h1>{data.value}</h1>
          <Platzhalter>
            <Image
              src="/../public/images/2c.jpg"
              width="200"
              height="350"
              alt="tarotcard"
              onClick={RandomCard}
            />
          </Platzhalter>
          <NameBanner>{data.name}</NameBanner>
        </CardBody>
      </>
    );
  } else {
    return <>wait...</>;
  }
}
