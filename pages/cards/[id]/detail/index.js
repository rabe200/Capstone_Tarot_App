import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getCardById } from "../../../../lib/data";
import CardPreviewImage from "../../../../components/CardPreviewImage";

export default function Details() {
  const [hasMounted, setHasMounted] = useState(false);
  const router = useRouter();
  const id = router ? router.query?.id : null;
  const card = getCardById(id);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return (
    id < 78 && (
      <>
        <h1>DETAILPAGE</h1>
        <CardPreviewImage card={card} />
        <section>{card.meaning_up}</section>

        <Link href={`/cards/${id}/desc/`}>
          <button type="button" aria-label="more details">
            more details
          </button>
        </Link>
        <Link href={`/cards/${id}/`}>
          <button type="button" aria-label="back">
            back
          </button>
        </Link>
      </>
    )
  );
}
