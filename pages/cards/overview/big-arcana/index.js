import Link from "next/link";
import useStore from "../../../../src/store/store";

export default function Overview() {
  const cards = useStore((state) => state.allCards);

  return (
    <>
      <h1>big arcana</h1>

      <ul>
        {cards
          .filter((card) => card.type === "major")
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
