import { useRouter } from "next/router";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function NextCardButton({}) {
  const router = useRouter();
  const id = router ? router.query.id : null;

  useEffect(() => {
    const id = router ? router.query.id : null;
    setCurrentPage(id);
  }, [router]);
  const [currentPage, setCurrentPage] = useState(null);

  function nextPage() {
    setCurrentPage(parseInt(id) + 1), router.push(`/cards/${parseInt(id) + 1}`);
  }

  function resetPage() {
    setCurrentPage(0);
    router.push(`/cards/0`);
  }

  return (
    <>
      <button
        type="button"
        aria-label="next card"
        onClick={id < 77 ? nextPage : resetPage}
      >
        NEXT
      </button>
      <Link href="/">
        <button type="button" aria-label="back to menu">
          back to menu
        </button>
      </Link>
    </>
  );
}
