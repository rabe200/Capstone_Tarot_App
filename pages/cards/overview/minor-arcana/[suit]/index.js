import Link from "next/link";
import useStore from "../../../../../src/store/store";
import { useRouter } from "next/router";

export default function Cups() {
  const cards = useStore((state) => state.allCards);
  const router = useRouter();
  const { suit } = router.query;

  return (
    <>
      <ul>
        <h2>cups</h2>
        {cards
          .filter((card) => card.suit === suit)
          .map((card) => (
            <li key={card.id}>
              {" "}
              <Link href={{ pathname: `/cards/${card.id}` }}>{card.name}</Link>
            </li>
          ))}
      </ul>
      <Link href="/">menu</Link>
    </>
  );
}
