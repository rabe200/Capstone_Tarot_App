import { useRouter } from "next/router";
import CardPreviewImage from "../../../components/CardPreviewImage";
import { useState, useEffect } from "react";
import StyledCardContainer from "../../../components/Styled/StyledCardContainer";
import StyledMenuBar, { Arrow } from "../../../components/Styled/StyledMenuBar";
import useStore from "../../../src/store/store";
import styled from "styled-components";
import Link from "next/link";
import ArrowIconRight from "../../../components/Styled/ArrowIconRight";
import ArrowIconLeft from "../../../components/Styled/ArrowIconLeft";
const StyledMenuLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-style: italic;
  font-size: 2rem;
`;

const Styled3Grid = styled.div`
  display: grid;
  grid-template-columns: 50px 200px 50px;
  background: hotpink;
  justify-content: center;
  align-items: center;
`;

export default function Details() {
  const [hasMounted, setHasMounted] = useState(false);
  const router = useRouter();
  const id = router ? router.query.id : null;
  console.log(id);
  const cards = useStore((state) => state.allCards);
  const card = cards.find((card) => card.id === `${id}`);
  const currentCardIndex = cards.indexOf(card);
  const nextCardId =
    currentCardIndex === cards.length - 1 ? 0 : currentCardIndex + 1;
  const nextPage = `/cards/${nextCardId}`;
  console.log(nextPage);
  const previousCardId =
    currentCardIndex === 0 ? cards.length - 1 : currentCardIndex - 1;
  const previousPage = `/cards/${previousCardId}`;
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return (
    id < 78 && (
      <>
        <StyledCardContainer>
          <Styled3Grid>
            <Link href={previousPage}>
              <div>
                <ArrowIconLeft />
              </div>
            </Link>

            <CardPreviewImage card={card} clickable={true} />
            <Link href={nextPage}>
              <div>
                <ArrowIconRight />
              </div>
            </Link>
          </Styled3Grid>
        </StyledCardContainer>
        <StyledMenuBar query1={previousPage} query2={nextPage}>
          <StyledMenuLink href={`/`}>menu</StyledMenuLink>{" "}
        </StyledMenuBar>
      </>
    )
  );
}
