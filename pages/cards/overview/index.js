import Link from "next/link";
import useStore from "../../../src/store/store";
import BackButton from "../../../components/Backbutton/backbutton";

export default function Overview() {
  const suits = useStore((state) => state.getSuits);

  return (
    <>
      <ul>
        <li>
          <Link
            href={{ pathname: "/cards/overview/big-arcana" }}
            arcana={"major"}
          >
            big arcana
          </Link>
        </li>
        <li>
          <Link
            href={{ pathname: "/cards/overview/minor-arcana" }}
            arcana={"minor"}
          >
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
      <BackButton />
      <Link href="/">menu</Link>
    </>
  );
}
