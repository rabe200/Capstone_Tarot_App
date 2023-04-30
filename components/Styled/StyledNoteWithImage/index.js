import styled from "styled-components";
import { useState, useEffect } from "react";
import useStore from "../../../src/store/store";
import DeleteButton from "../../DeleteButton";

const NoteWithImageContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  border: 2px black solid;
  background: ${(p) => p.theme.colorBackground};
  border-radius: 8px;
  background: white;
  padding-top: 20px;
  overflow: auto;
`;

const StyledButton = styled.div`
  background: ${(p) => p.theme.colorContainer};
  color: ${(p) => p.theme.colorBackground};
  width: 3em;
  border-radius: 8px;
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
  border-radius: 0px;
  background: ${(p) => p.theme.colorContainer};
  color: ${(p) => p.theme.colorText};
  align-self: center;
  width: 100%;
  min-height: 60px;
  font-size: 1.2em;
  overflow-wrap: break-word;
  border: ${(p) => p.theme.border};
  max-height: ${(props) => (props.noteOverflow === "hidden" ? "" : "70px")};
  overflow: ${(props) => (props.noteOverflow === "hidden" ? "auto" : "hidden")};
  border: ${(p) => {
    p.theme.border;
  }};
`;

export default function NoteWithImage({ card, toggle }) {
  const [noteOverflow, setNoteOverflow] = useState();
  const [inputValue, setInputValue] = useState("");
  const editSelectedNote = useStore((state) => state.editSelectedNote);
  const setCurrentNote = useStore((state) => state.setCurrentNote);
  function handleClick() {}

  function enlargeContent() {
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
          onClick={enlargeContent}
          onDoubleClick={handleClick}
          noteOverflow={noteOverflow}
          contentEditable={false}
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
    </NoteWithImageContainer>
  );
}
