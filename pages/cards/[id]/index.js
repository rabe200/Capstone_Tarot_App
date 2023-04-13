import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { getCardById } from "../../../lib/data";
import NextCardButton from "../../../components/NextCardButton";
import PreviousCardButton from "../../../components/PreviousCardButton";
import DetailsButton from "../../../components/DetailsButton";
import NotesButton from "../../../components/NotesButton";
import SearchBar from "../../../components/SearchBar";

export default function Details({ cards, setSearchResults }) {
  const router = useRouter();
  const id = router ? router.query.id : null;
  const card = getCardById(id);
  return (
    id < 78 && (
      <>
        <figure>
          {card.image ? (
            <Image
              width={100}
              height={180}
              src={card.image}
              alt={card.name}
              priority={true}
            />
          ) : (
            isLoading
          )}
          <figcaption>{card.name}</figcaption>
        </figure>
        <DetailsButton card={card} />
        <NotesButton card={card} />
        <PreviousCardButton cards={cards} setResults={setSearchResults} />
        <NextCardButton />
        <Link href="/">
          <button type="button">back</button>
        </Link>
        <SearchBar />
      </>
    )
  );
}
