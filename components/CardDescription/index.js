import styled from "styled-components";

const CardBody = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 0;
  height: 60%;
  width: 60%;
`;

const DescriptionContainer = styled.div`
  height: 100%;
  padding: 0;
  margin: 0;
  background: black;
  color: white;
  overflow: auto;
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
  overflow: auto;
`;

export default function CardDescription({ card, desc }) {
  return (
    <Container>
      {desc === true ? (
        <CardBody>
          <DescriptionContainer>{card.desc}</DescriptionContainer>
        </CardBody>
      ) : (
        <CardBody>
          <DescriptionContainer>
            <b>up: </b>
            {card.meaning_up} <b>rev:</b> {card.meaning_rev}
          </DescriptionContainer>
        </CardBody>
      )}
    </Container>
  );
}