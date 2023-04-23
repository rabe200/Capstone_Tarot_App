import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import StyledList from "../Styled/StyledList";

const CardBody = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 0;
  height: 100%;
  width: 100%;
`;

const DescriptionContainer = styled.div`
  height: 100%;
  background: black;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export default function CardPreviewImage({ card, clickable }) {
  return (
    <Container>
      {clickable === true ? (
        <>
          <CardBody>
            <Link href={`/cards/${card.id}/detail`}>
              {" "}
              <Image
                src={card.image}
                width="200"
                height="350"
                alt={card.name}
              />
            </Link>
            <StyledList>
              <DescriptionContainer>{card.desc}</DescriptionContainer>
            </StyledList>
          </CardBody>
        </>
      ) : (
        <CardBody>
          <Image src={card.image} width="200" height="350" alt={card.name} />
          <StyledList>
            <b>up: </b>
            {card.meaning_up} <b>rev:</b> {card.meaning_rev}
          </StyledList>
        </CardBody>
      )}
    </Container>
  );
}
