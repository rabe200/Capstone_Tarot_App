import styled from "styled-components";
import { useState, useEffect } from "react";
import useStore from "../../../src/store/store";
import DeleteButton from "../../DeleteButton";
import { ToastContainer, toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";

import "react-toastify/dist/ReactToastify.css";
import { useDoubleTap } from "use-double-tap";

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
  z-index: 1000;
`;

const StyledButton = styled.div`
  background: ${(p) => p.theme.colorContainer};
  color: ${(p) => p.theme.colorText};
  width: 4em;
  border-radius: 8px;
  text-align: center;
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
  background: ${(p) => p.theme.colorBackground};

  align-self: center;
  width: 100%;
  min-height: 120px;
  font-size: 1.4em;
  overflow-wrap: break-word;
  border: ${(p) => p.theme.border};
  max-height: ${(props) => (props.noteOverflow === "hidden" ? "" : "70px")};
  overflow: ${(props) => (props.noteOverflow === "hidden" ? "auto" : "hidden")};
  color: ${(props) =>
    props.contentEditable === true
      ? props.theme.colorContainer
      : props.theme.colorText};
  background: ${(props) =>
    props.contentEditable === true
      ? props.theme.colorText
      : props.theme.colorContainer};
  border: ${(p) => {
    p.theme.border;
  }};
`;

const StyledToastContainer = styled(ToastContainer)`
  z-index: 2000;
  position: sticky;

  .Toastify__progress-bar {
    background: white;
  }
  .Toastify__toast {
    background: ${(p) => p.theme.colorContainer};
    color: ${(p) => p.theme.colorText};
    cursor: inherit;
    font-family: "pixelOperator";
  }
  .Toastify__toast-icon {
    display: none;
  }
  .Toastify__toast-container--bottom-center {
  }
`;

export default function NoteWithImage({ card, toggle }) {
  const [noteOverflow, setNoteOverflow] = useState();
  const [inputValue, setInputValue] = useState("");
  const editSelectedNote = useStore((state) => state.editSelectedNote);
  const setCurrentNote = useStore((state) => state.setCurrentNote);
  const [editable, setEditable] = useState(false);
  const doubleTap = useDoubleTap((event) => {
    router.push(`/cards/swiper/${slug}`);
    console.log(event.target);
  });
  function handleClick() {
    setEditable(!editable);
  }
  injectStyle();

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

  function showToastMessage() {
    toast.success("Note Saved", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setCurrentNote(
      styledNotesListener.innerHTML.replace(/(<\/?div>)|(<br>)/gi, "")
    );
    editSelectedNote(card);
    setEditable(false);
    showToastMessage();
  }

  return (
    <NoteWithImageContainer>
      <StyledToastContainer onClick={(event) => console.log(event)} />
      <form id="myForm">
        <StyledNotes
          {...doubleTap}
          onClick={enlargeContent}
          onDoubleClick={handleClick}
          noteOverflow={noteOverflow}
          contentEditable={editable}
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
          <StyledToastContainer />
        </ButtonBox>
      </form>
    </NoteWithImageContainer>
  );
}
