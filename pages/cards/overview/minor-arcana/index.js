import Link from "next/link";
import BackButton from "../../../../components/Backbutton/backbutton";
import useStore from "../../../../src/store/store";

export default function MinorArcana() {
  const suits = useStore((state) => state.getSuits);

  return (
    <>
      <ul>
        <h1>minor arcana</h1>
        {suits().map((suit) => {
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
