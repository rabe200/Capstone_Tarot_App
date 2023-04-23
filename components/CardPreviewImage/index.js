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

const StyledImage = styled(Image)`
  &:hover {
    border: black solid 6px;
    border-radius: 8px;
    transition: all 0.2s;
    padding: 12px;
    margin-left: ${(props) => (props.active ? "64px" : "24px")};
    background: ${(props) => (props.active ? "#333" : "#f2f2f2")};
    color: ${(props) => (props.active ? "#f2f2f2" : "#333")};
  }

  @media only screen and (min-width: 360px) {
    width: 200px;
    height: 350px;
  }

  @media only screen and (min-width: 540px) {
    width: 250px;
    height: 400px;
  }

  @media only screen and (min-width: 768px) {
    width: 350px;
    height: 650px;
  }
`;

export default function CardPreviewImage({ card, clickable }) {
  return (
    <Container>
      {clickable === true ? (
        <>
          <CardBody>
            <Link href={`/cards/${card.id}/detail`}>
              {" "}
              <StyledImage
                src={card.image}
                width="150"
                height="220"
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
