import { Fragment, useState, useEffect, useRef } from "react";
import useStore from "../../../src/store/store";
import Link from "next/link";
import StyledMenuBar from "../../../components/Styled/StyledMenuBar";
import DeleteButton from "../../../components/DeleteButton";
import EditButton from "../../../components/EditButton";
import StyledCardContainer from "../../../components/Styled/StyledCardContainer";
import styled from "styled-components";

const StyledForm = styled.form`
  width: 210px;
  height: 40px;
  position: relative;
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: black;
  color: white;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  gap: 20rem;
  margin: 0.3rem 0;
  color: white;
  text-decoration: none;
  &:hover {
    color: magenta;
  }
`;

export default function History() {
  const cardsDeleted = useStore((state) => state.cardsDeleted);
  const updateCardsDrawn = useStore((state) => state.updateCardsDrawn);
  const [hasMounted, setHasMounted] = useState(false);
  const drawnCards = useStore((state) => state.drawnCards);
  const cardsDrawn = useStore((state) => state.cardsDrawn);

  const [selectedOption, setSelectedOption] = useState("nameUp");

  const sortedItems = drawnCards.sort((a, b) => {
    if (selectedOption === "nameUp") {
      return a.name.trim().localeCompare(b.name);
    } else if (selectedOption === "nameDown") {
      return b.name.trim().localeCompare(a.name);
    }
  });

  useEffect(() => {
    updateCardsDrawn();
  });

  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <Fragment>
      <StyledCardContainer>
        <span>
          {cardsDrawn ? (
            <>
              <b>total number of drawn cards: {cardsDrawn}</b>
              <br />
              <b>total number of deleted cards: {cardsDeleted}</b>
            </>
          ) : (
            "noDrawnCards"
          )}
        </span>
        <section>
          {" "}
          <StyledList>
            {sortedItems.map((card) => {
              return (
                <Fragment key={card.uuid}>
                  <hr />
                  <li>
                    <b>{new Date(card.date).toLocaleDateString()}</b>
                  </li>
                  <li>
                    <StyledLink href={`/cards/${card.id}`}>
                      {card.name}
                    </StyledLink>
                  </li>

                  <section>
                    note: <i>{card.notes}</i>
                  </section>
                  <EditButton uuid={card.uuid} card={card} />
                  <DeleteButton uuid={card.uuid} />
                </Fragment>
              );
            })}
          </StyledList>
        </section>

        <StyledMenuBar query1={"/"} query2={"/"}>
          <StyledForm>
            <select
              style={{
                width: "100%",
                height: "100%",
                textAlign: "center",
                fontSize: "1.3rem",
              }}
              name="filter results by"
              onChange={(event) => setSelectedOption(event.target.value)}
            >
              <option value="dateUp">date up</option>
              <option value="dateDown">date down</option>
              <option value="nameUp" onClick={(event) => refreshList(event)}>
                name up
              </option>
              <option value="nameDown" onClick={(event) => refreshList(event)}>
                name down
              </option>
            </select>
          </StyledForm>
        </StyledMenuBar>
      </StyledCardContainer>
    </Fragment>
  );
}
