import Link from "next/link";
import BackButton from "../../../../components/Backbutton/backbutton";
import useStore from "../../../../src/store/store";

export default function Description() {
  const cards = useStore((state) => state.allCards);
  const allSuits = cards.map((card) => card.suit);
  const suits = allSuits
    .filter((suit, index) => {
      return allSuits.indexOf(suit) === index;
    })
    .filter((item) => item !== undefined);
  return (
    <>
      <ul>
        <h1>minor arcana</h1>
        {console.log(suits)}
        {suits.map((suit) => {
          return (
            <li key={suit}>
              <Link href={{ pathname: `/cards/overview/minor-arcana/${suit}` }}>
                {suit}
              </Link>
            </li>
          );
        })}
      </ul>
      <BackButton />
      <Link href="/">menu</Link>
    </>
  );
}
