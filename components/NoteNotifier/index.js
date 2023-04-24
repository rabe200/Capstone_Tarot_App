import styled from "styled-components";
import useStore from "../../src/store/store";
import Link from "next/link";
import NoteNotifierIcon from "../Styled/NoteNotifierIcon";

const StyledLink = styled(Link)`
  text-decoration: none;
  text-align: end;
  color: lime;
  font-size: 1em;
  &:visited {
    text-decoration: none;
  }
  &:hover {
    text-decoration: none;
  }
  &:active {
    text-decoration: none;
  }
`;

const Spacer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  width: 20px;
  height: 40px;
  opacity: 80%;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
`;

export default function NoteNotifier(currentCard) {
  const getDrawnCardById = useStore((state) => state.getDrawnCardById);
  const cardToCheck = getDrawnCardById(currentCard.currentCard.id);

  return cardToCheck.length > 0 ? (
    <Container>
      {cardToCheck[0].notes && (
        <Spacer>
          <StyledLink href={`/cards/${currentCard.currentCard.id}/notes`}>
            <NoteNotifierIcon />
          </StyledLink>
        </Spacer>
      )}
    </Container>
  ) : (
    <Container>
      <Spacer></Spacer>
    </Container>
  );
}
