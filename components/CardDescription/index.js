import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import useStore from "../../src/store/store";

const CardBody = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  left: 0;
  height: 100%;
  overflow: hidden;
  width: 70%;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 80%;
  max-height: 80%;
  padding: 0;
  margin: 0;
  background: ${(p) => p.theme.colorBackground};
  color: ${(p) => p.theme.colorText};
  overflow: auto;
  border-radius: 8px;
  padding: 8px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-height: 40%;
  max-height: 40%;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  overflow: hidden;
  @media only screen and (min-width: 414px) {
    height: 212px;
  }
`;

export default function CardDescription({ card, desc }) {
  const localTheme = useStore((state) => state.theme);
  return (
    <Container>
      {desc === true ? (
        <ThemeProvider theme={localTheme}>
          <CardBody>
            <DescriptionContainer>{card.desc}</DescriptionContainer>
          </CardBody>
        </ThemeProvider>
      ) : (
        <ThemeProvider theme={localTheme}>
          <CardBody>
            <DescriptionContainer>
              <b>up: </b>
              {card.meaning_up} <b>rev:</b> {card.meaning_rev}
            </DescriptionContainer>
          </CardBody>
        </ThemeProvider>
      )}
    </Container>
  );
}
