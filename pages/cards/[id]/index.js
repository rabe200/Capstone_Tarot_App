import Link from "next/link";
import { useRouter } from "next/router";
import { getCardById } from "../../../lib/data";
import DetailsButton from "../../../components/DetailsButton";
import NotesButton from "../../../components/NotesButton";
import SearchBar from "../../../components/SearchBar";
import CardSliderButton from "../../../components/CardSliderButton";
import CardPreviewImage from "../../../components/CardPreviewImage";
import { useState, useEffect } from "react";

export default function Details() {
  const [hasMounted, setHasMounted] = useState(false);
  const router = useRouter();
  const id = router ? router.query.id : null;
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
        <CardPreviewImage card={card} />
        <DetailsButton card={card} />
        <NotesButton card={card} />
        <CardSliderButton />
        <Link href="/">
          <button type="button">back</button>
        </Link>
        <SearchBar />
      </>
    )
  );
}
