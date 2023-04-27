import styled from "styled-components";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import useStore from "../../../src/store/store";
import DeleteButton from "../../DeleteButton";

const StyledImage = styled(Image)`
  border-radius: 8px;

  border: ${(p) => p.theme.colorText};
`;

const NoteWithImageContainer = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-template-rows: 4fr 1fr;
  width: 100%;
`;

const StyledButton = styled.div`
  border: white solid 2px;
  background: black;
  background: ${(p) => p.theme.colorBackground};
  color: ${(p) => p.theme.colorText};
  border-radius: 8px;
  width: 3em;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const DeleteButtonToggleBox = styled.div`
  visibility: ${(props) => (props.showButtons ? "visible" : "hidden")};
`;

const StyledNotes = styled.div`
  -moz-appearance: textfield-multiline;
  -webkit-appearance: textarea;
  background: ${(p) => p.theme.colorContainer};
  color: ${(p) => p.theme.colorText};
  align-self: center;
  width: 100%;
  min-height: 60px;
  font-size: 1.2em;
  overflow-wrap: break-word;
  border: ${(p) => p.theme.border};

  height: ${(props) => (props.noteOverflow === "hidden" ? "120px" : "100%")};
  overflow: ${(props) => (props.noteOverflow === "hidden" ? "hidden" : "auto")};
  border: ${(p) => {
    p.theme.border;
  }};
`;

export default function NoteWithImage({ card, toggle }) {
  const [noteOverflow, setNoteOverflow] = useState();
  const [inputValue, setInputValue] = useState("");
  const editSelectedNote = useStore((state) => state.editSelectedNote);
  const setCurrentNote = useStore((state) => state.setCurrentNote);
  function handleClick() {
    if (noteOverflow === "hidden") {
      setNoteOverflow("auto");
    } else {
      setNoteOverflow("hidden");
    }
  }
  const styledNotesListener = document.getElementById(`${card.uuid}`);
  useEffect(() => {
    if (styledNotesListener)
      styledNotesListener.addEventListener("listener", function () {
        setInputValue(
          styledNotesListener.innerHTML.replace(/(<\/?div>)|(<br>)/gi, "")
        );
      });
  });

  function handleSubmit(event) {
    event.preventDefault();
    setCurrentNote(
      styledNotesListener.innerHTML.replace(/(<\/?div>)|(<br>)/gi, "")
    );
    editSelectedNote(card);
  }

  return (
    <NoteWithImageContainer>
      <form id="myForm">
        <StyledNotes
          onClick={handleClick}
          noteOverflow={noteOverflow}
          contentEditable
          suppressContentEditableWarning={true}
          id={`${card.uuid}`}
          name="textBox"
          type="text"
        >
          {card.notes}
        </StyledNotes>
        <ButtonBox>
          <DeleteButtonToggleBox showButtons={toggle}>
            <DeleteButton uuid={card.uuid} showButtons={toggle} />
          </DeleteButtonToggleBox>
          <StyledButton
            type="submit"
            form="myForm"
            id="save"
            onClick={handleSubmit}
          >
            save
          </StyledButton>
        </ButtonBox>
      </form>
      <Link href={`/cards/${card.id}`}>
        <StyledImage src={card.image} width="80" height="120" alt={card.name} />
      </Link>
    </NoteWithImageContainer>
  );
}
