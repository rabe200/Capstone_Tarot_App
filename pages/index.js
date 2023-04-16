import Link from "next/link";
import { useStore } from "./store";
import { cards } from "../lib/data";

export default function HomePage(itemID) {
  // const drawCard = useStore((state) => state.drawCard);
  // const drawnCards = useStore((state) => state.drawnCards);
  const addCount = useStore((state) => state.addCount);
  const decreaseCount = useStore((state) => state.decreaseCount);
  return (
    <>
      <Link href={`/cards/dailycard/moodmeter`}>DAILY CARD</Link>
      <p></p>
      <Link href="/cards/history/">history</Link>
      <p></p>
      {itemID ? <Link href={`/cards/${itemID}`}>overview</Link> : null}
      <p></p>
      <Link href="/search">search</Link>
      <p></p>
      <button type="button" onClick={() => drawCard(itemID)}>
        zustandButton
        {/* {console.log(itemID.itemID)} */}
      </button>
      <button type="button" onClick={() => addCount(500)}>
        addd {/* {console.log(itemID.itemID)} */}
      </button>
      <button type="button" onClick={() => decreaseCount(500)}>
        decrease
        {/* {console.log(itemID.itemID)} */}
      </button>
      {/* <p>{console.log(drawnCards)}</p> */}
      {/* <p>{console.log(cardName)}</p> */}
    </>
  );
}

// addClick: (increment) => {
//             set((state) => {
//               return { clicks: state.clicks + increment };
//             });
//           },
