import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import CardDescription from "../CardDescription";

const CardBody = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 0;
  margin: 0;
  padding: 0;
  height: 480px;
  width: 100%;
  @media only screen and (min-height: 895px) {
    height: 900px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  width: 100%;

  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const StyledImage = styled(Image)`
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
    height: 320px;
  }

  @media only screen and (min-width: 540px) {
    width: 250px;
    height: 400px;
  }

  @media only screen and (min-width: 768px) {
    width: 300px;
    height: 500px;
  }
`;

export default function CardPreviewImage({ card, clickable }) {
  return (
    <Container>
      {clickable === true ? (
        <CardBody>
          <Link href={`/cards/${card.id}/detail`}>
            <StyledImage
              src={card.image}
              width="150"
              height="220"
              alt={card.name}
            />
          </Link>

          <CardDescription card={card} desc={true}></CardDescription>
        </CardBody>
      ) : (
        <CardBody>
          <StyledImage
            src={card.image}
            width="100"
            height="210"
            alt={card.name}
          />
        </CardBody>
      )}
    </Container>
  );
}
