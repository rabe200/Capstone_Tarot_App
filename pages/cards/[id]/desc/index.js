import CardPreviewImage from "../../../../components/CardPreviewImage";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";
import { getCardById } from "../../../../lib/data";

export default function Description() {
  const [hasMounted, setHasMounted] = useState(false);
  const router = useRouter();
  const id = router.query.id;

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
        <h1>DESCRIPTION</h1>
        <CardPreviewImage card={card} />
        <section>{card.desc}</section>
        <Link href={`/cards/${id}/detail`}>
          <button type="button" aria-label="back">
            back
          </button>
        </Link>
      </>
    )
  );
}
