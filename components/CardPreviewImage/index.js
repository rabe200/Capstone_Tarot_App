import styled from "styled-components";
import Image from "next/image";

const CardBody = styled.figure`
  /* height: 600px;
  width: 375px; */
  background-color: crimson;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 0;
`;

const NameBanner = styled.figcaption`
  background-color: white;
  width: 90%;
  text-align: center;
`;

const StyledDiv = styled.div`
  background-color: darkgrey;
`;

export default function CardPreviewImage({ card }) {
  return (
    <StyledDiv>
      <CardBody>
        <h1>{card.name}</h1>
        <Image src={card.image} width="200" height="350" alt={card.name} />
        <NameBanner>{card.name}</NameBanner>
      </CardBody>
    </StyledDiv>
  );
}
