import { useRouter } from "next/router";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function PreviousCardButton({}) {
  const router = useRouter();
  const id = router ? router.query.id : null;

  useEffect(() => {
    const id = router ? router.query.id : null;
    setCurrentPage(id);
  }, [router]);
  const [currentPage, setCurrentPage] = useState(null);

  function previousPage() {
    setCurrentPage(parseInt(id) - 1);
    router.push(`/cards/${parseInt(id) - 1}`);
  }

  function stayOnPage() {
    setCurrentPage(77);
    router.push(`/cards/77`);
  }

  return (
    <>
      <button
        type="button"
        aria-label="previous card"
        onClick={id > 0 ? previousPage : stayOnPage}
      >
        PREV
      </button>
      <Link href="/">
        <button type="button" aria-label="back to menu">
          back to menu
        </button>
      </Link>
    </>
  );
}
