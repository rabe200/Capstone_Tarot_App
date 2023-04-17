import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { getCardById } from "../../../lib/data";
import DetailsButton from "../../../components/DetailsButton";
import NotesButton from "../../../components/NotesButton";
import SearchBar from "../../../components/SearchBar";
import CardSliderButton from "../../../components/CardSliderButton";
import CardPreviewImage from "../../../components/CardPreviewImage";

export default function Details() {
  const router = useRouter();
  const id = router ? router.query.id : null;
  const card = getCardById(id);
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
