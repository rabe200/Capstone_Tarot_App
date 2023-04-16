import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useStore } from "../../store";
import React from "react";

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

export default function ShowCard() {
  const currentCard = useStore((state) => state.currentCard);
  const [hasMounted, setHasMounted] = React.useState(false);
  const drawnCard = currentCard;
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  if (drawnCard) {
    return (
      <>
        <CardBody>
          <h1>{drawnCard.name}</h1>
          <Image
            src={drawnCard.image}
            width="200"
            height="350"
            alt={drawnCard.name}
          />
          <NameBanner>{drawnCard.name}</NameBanner>
        </CardBody>
        <Link
          href={{
            pathname: "/cards/dailycard/description",
          }}
        >
          <button type="button">more details</button>
        </Link>
      </>
    );
  } else {
    return null;
  }
}
