import CardPreviewImage from "../../../../components/CardPreviewImage";
import Link from "next/link";
import { useState, useEffect } from "react";
import useStore from "../../../../src/store/store";
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
      <CardPreviewImage card={currentCard} />
      <article>{currentCard.desc}</article>
      <Link href={{ pathname: "/cards/dailycard/detail" }}>
        <button type="button" aria-label="less details button">
          less details
        </button>
      </Link>
      <Link href={{ pathname: "/cards/dailycard/notes" }}>
        <button type="button" aria-label="take notes">
          take notes
        </button>
      </Link>
    </>
  );
}
