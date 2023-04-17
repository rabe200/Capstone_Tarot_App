import styled from "styled-components";
import Image from "next/image";

const CardBody = styled.figure`
  height: 500px;
  width: 300px;
  background-color: crimson;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NameBanner = styled.figcaption`
  background-color: white;
  width: 90%;
  text-align: center;
`;

export default function CardPreviewImage({ card }) {
  return (
    <>
      <CardBody>
        <h1>{card.name}</h1>
        <Image src={card.image} width="200" height="350" alt={card.name} />
        <NameBanner>{card.name}</NameBanner>
      </CardBody>
    </>
  );
}
