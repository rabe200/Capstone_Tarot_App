import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { getCardById } from "../../../lib/data";
import NextCardButton from "../../../components/NextCardButton";
import PreviousCardButton from "../../../components/PreviousCardButton";
import DetailsButton from "../../../components/DetailsButton";
import NotesButton from "../../../components/NotesButton";
import SearchBar from "../../../components/SearchBar";

export default function Details({ cards, setSearchResults, searchResults }) {
  const router = useRouter();
  const id = router ? router.query.id : null;
  const [currentPage, setCurrentPage] = useState(id);
  const card = getCardById(id);
  return (
    id < 78 && (
      <>
        <figure>
          <Image
            width={100}
            height={180}
            src={card.image}
            alt={card.name}
            priority={true}
          />
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
