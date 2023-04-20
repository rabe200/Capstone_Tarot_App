import CardPreviewImage from "../../../../components/CardPreviewImage";
import Link from "next/link";
import { useState, useEffect } from "react";
import useStore from "../../../../src/store/store";
import StyledCardContainer from "../../../../components/Styled/StyledCardContainer";
export default function Description() {
  const [hasMounted, setHasMounted] = useState(false);

  const currentCard = useStore((state) => state.currentCard);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return (
    <>
      <h1>{currentCard.name}</h1>
      <StyledCardContainer>
        <CardPreviewImage card={currentCard} />
      </StyledCardContainer>
      <article>
        {currentCard.desc ? currentCard.desc : currentCard.description}
      </article>
      <Link href={{ pathname: "/cards/dailycard/detail" }}>card meaning </Link>
      <p>
        <Link href={{ pathname: "/cards/dailycard/notes" }}>next</Link>
      </p>
    </>
  );
}
