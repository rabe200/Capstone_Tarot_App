import Link from "next/link";
import useStore from "../../../src/store/store";

export default function Overview() {
  const suits = useStore((state) => state.getSuits);

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
          {suits().map((suit) => {
            return (
              <li key={suit}>
                <Link
                  href={{ pathname: `/cards/overview/minor-arcana/${suit}` }}
                >
                  {suit}
                </Link>
              </li>
            );
          })}
        </ul>
      </ul>
      <Link href="/">menu</Link>
    </>
  );
}
