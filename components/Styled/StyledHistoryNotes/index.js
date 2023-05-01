import styled from "styled-components";
import { useState, useEffect } from "react";
import useStore from "../../../src/store/store";
import DeleteButton from "../../DeleteButton";
import { ToastContainer, toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";

import "react-toastify/dist/ReactToastify.css";
import { useDoubleTap } from "use-double-tap";

const NoteContainer = styled.div`
  display: grid;
  width: 375px;
  height: 160px;
  border: 2px black solid;
  background: ${(p) => p.theme.colorBackground};
  border-radius: 8px;
  background: white;
  padding-top: 20px;
  overflow: auto;
  z-index: 1000;
  font-size: 1.3em;
  text-align: center;
  @media only screen and (min-width: 414px) {
    width: 414px;
  }

  @media only screen and (min-width: 585px) {
    width: 585px;

    font-size: 1.2em;
  }

  @media only screen and (min-width: 834px) {
    width: 834px;
  }

  @media only screen and (min-width: 1194px) {
    width: 1194px;
  }
`;

const StyledButton = styled.div`
  background: ${(p) => p.theme.colorContainer};
  color: ${(p) => p.theme.colorText};
  width: 4em;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0px 2px 2px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: right;
  width: 100%;
  align-items: center;
`;

const DeleteButtonToggleBox = styled.div`
  visibility: ${(props) => (props.showButtons ? "visible" : "hidden")};
  padding-top: 2px;
  width: 80%;
`;

const StyledNotes = styled.div`
  -moz-appearance: textfield-multiline;
  -webkit-appearance: textarea;
  border-radius: 0px;
  background: ${(p) => p.theme.colorBackground};
  align-self: center;
  width: 100%;
  font-size: 1em;
  overflow-wrap: break-word;
  box-shadow: 0px 2px 2px;

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
  font-size: 1.2em;
  box-shadow: 0px 2px 2px;

  .Toastify__progress-bar {
    background: black;
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
  .Toastify__toast-container--top-center {
  }
`;

export default function HistoryNotes({ card, toggle }) {
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
      position: toast.POSITION.TOP_CENTER,
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
    <NoteContainer>
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
    </NoteContainer>
  );
}
