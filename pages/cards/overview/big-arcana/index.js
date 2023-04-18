import Link from "next/link";
import BackButton from "../../../../components/Backbutton/backbutton";
import useStore from "../../../../src/store/store";

export default function Overview() {
  const cards = useStore((state) => state.allCards);

  return (
    <>
      <ul>
        <h2>big arcana</h2>
        {cards
          .filter((card) => card.type === "major")
          .map((card) => (
            <li key={card.id}>
              {" "}
              <Link href={{ pathname: `/cards/${card.id}` }}>{card.name}</Link>
            </li>
          ))}
      </ul>
      <BackButton />
      <Link href="/">
        <button type="button">menu</button>
      </Link>
    </>
  );
}
