import Link from "next/link";
import { useState, useEffect } from "react";
import useStore from "../../../src/store/store";
import BackButton from "../../../components/Backbutton/backbutton";
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
        <li>
          <Link href={{ pathname: "/cards/overview/big-arcana" }}>
            big arcana
          </Link>
        </li>
        <li>
          <Link href={{ pathname: "/cards/overview/minor-arcana" }}>
            minor arcana
          </Link>
        </li>
        <ul>
          <li>
            <Link href={{ pathname: "/cards/overview/minor-arcana/wands" }}>
              wands
            </Link>
          </li>
          <li>
            <Link href={{ pathname: "/cards/overview/minor-arcana/cups" }}>
              cups
            </Link>
          </li>
          <li>
            <Link href={{ pathname: "/cards/overview/minor-arcana/coins" }}>
              coins
            </Link>
          </li>
          <li>
            <Link href={{ pathname: "/cards/overview/minor-arcana/swords" }}>
              swords
            </Link>
          </li>
        </ul>
      </ul>
      <BackButton />
      <Link href="/">
        <button type="button">menu</button>
      </Link>
    </>
  );
}
