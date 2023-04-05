import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const CardBody = styled.div`
  height: 500px;
  width: 300px;
  background-color: crimson;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NameBanner = styled.h2`
  background-color: white;
  width: 90%;
  text-align: center;
`;

export default function ShowCard({ dailyCard }) {
  if (dailyCard) {
    return (
      <>
        <CardBody>
          <h1>{dailyCard.value}</h1>
          <Image
            src={dailyCard.image}
            width="200"
            height="350"
            alt="tarotcard"
          />
          <NameBanner>{dailyCard.name}</NameBanner>
        </CardBody>
        <Link
          href={{
            pathname: "/cards/dailycard/detail",
          }}
        >
          <button type="button">more details</button>
        </Link>
      </>
    );
  } else {
    return <p>loading</p>;
  }
}
