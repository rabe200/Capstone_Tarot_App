import Link from "next/link";
import { useState, useEffect } from "react";
import BackButton from "../../../../components/Backbutton/backbutton";

export default function Description() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return (
    <>
      <ul>
        <h1>minor arcana</h1>
        <li>
          {" "}
          <Link href={{ pathname: "/cards/overview/minor-arcana/wands" }}>
            wands
          </Link>
        </li>
        <li>
          {" "}
          <Link href={{ pathname: "/cards/overview/minor-arcana/cups" }}>
            cups
          </Link>
        </li>
        <li>
          {" "}
          <Link href={{ pathname: "/cards/overview/minor-arcana/pentacles" }}>
            pentacles
          </Link>
        </li>
        <li>
          {" "}
          <Link href={{ pathname: "/cards/overview/minor-arcana/swords" }}>
            swords
          </Link>
        </li>
      </ul>
      <BackButton />
      <Link href="/">
        <button type="button">menu</button>
      </Link>
    </>
  );
}
