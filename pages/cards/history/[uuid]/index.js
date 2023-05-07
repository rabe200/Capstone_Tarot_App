import { useState, useEffect } from "react";
import useStore from "../../../../src/store/store";
import { useRouter } from "next/router";
import styled from "styled-components";
import TopMenuBar from "../../../../components/Styled/StyledTopMenuBar";
import StyledNavbar from "../../../../components/Styled/StyledNavbar";
import Frame from "../../../../components/Frame";
import { StyledButton } from "../../../../components/Styled/StyledHistoryNotes";
import { StyledToastContainer } from "../../../../components/Styled/StyledHistoryNotes";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import DeleteButton from "../../../../components/DeleteButton";
import Link from "next/link";

const CardText = styled.div`
  display: flex;
  width: 80%;
  height: 15%;
  overflow-wrap: anywhere;
  overflow: auto;
  justify-content: center;
  font-size: 1.2em;
  color: ${(p) => p.theme.colorText};
  background: ${(p) => p.theme.colorContainer};
  opacity: ${(p) => (p.isSelected === false ? "100%" : "60%")};
`;

const StyledForm = styled.form`
  width: 80%;
  min-height: 80px;
  max-height: 70%;
  background: white;
  overflow-wrap: break-word;
  border-radius: 8px;
  color: black;
`;

const StyledInput = styled.textarea`
  width: 100%;
  height: 100%;
  font-size: 1.4em;
  overflow-wrap: break-word;
`;

export default function History() {
  const [hasMounted, setHasMounted] = useState(false);
  const router = useRouter();
  const { uuid } = router.query;
  const drawnCards = useStore((state) => state.drawnCards);
  const [card] = drawnCards.filter((card) => card.uuid === uuid);
  const [select, setSelect] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const editSelectedNote = useStore((state) => state.editSelectedNote);
  const setCurrentNote = useStore((state) => state.setCurrentNote);

  function handleEdit(event) {
    event.preventDefault();
    setSelect(!select);
  }

  function showToastMessage() {
    toast.success("Note Saved", {
      position: toast.POSITION.TOP_CENTER,
    });
  }

  function handleSave(event) {
    event.preventDefault();
    setSelect(!select);
    setCurrentNote(inputValue);
    editSelectedNote(card);
    showToastMessage();
  }

  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    card && (
      <Frame>
        <StyledToastContainer />
        <TopMenuBar query2={"/dailyCard"} mid={"history"} />
        <CardText id="card-text" isSelected={select}>
          {card.notes}
        </CardText>
        <StyledForm id="myForm" hidden={!select}>
          <StyledInput
            id="inputField"
            onChange={(event) => setInputValue(event.target.value)}
            placeholder={"new note goes here"}
          ></StyledInput>
        </StyledForm>
        <StyledButton
          type="button"
          form="myForm"
          id="edit"
          onClick={handleEdit}
          hidden={select}
        >
          edit
        </StyledButton>

        <StyledButton
          type="submit"
          form="myForm"
          id="save"
          onClick={handleSave}
          hidden={!select}
        >
          save
        </StyledButton>
        <Link href={"/cards/history"} hidden={!select}>
          <DeleteButton uuid={uuid} />
        </Link>

        <StyledNavbar />
      </Frame>
    )
  );
}
