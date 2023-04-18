import { useRouter } from "next/router";
import useStore from "../../src/store/store";
import Link from "next/link";
import styled from "styled-components";

const StyledLinkGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 20rem;
  margin: 0.3rem 0;
`;

export default function CardSliderButton() {
  const router = useRouter();
  const { id } = router.query;

  const cards = useStore((state) => state.allCards);
  const card = cards.find((card) => card.id === `${id}`);
  const currentCardIndex = cards.indexOf(card);
  const nextCardSlug =
    currentCardIndex === cards.length - 1 ? 0 : currentCardIndex + 1;

  const previousCardSlug =
    currentCardIndex === 0 ? cards.length - 1 : currentCardIndex - 1;
  return (
    <StyledLinkGroup>
      <Link href={`/cards/${previousCardSlug}`}>prev</Link>
      <Link href={`/cards/${nextCardSlug}`}>next</Link>
    </StyledLinkGroup>
  );
}
