import Link from "next/link";

let randomNr = Math.floor(Math.random() * 77 + 1);

export default function HomePage() {
  return (
    <div>
      <>
        <Link href={{ pathname: "./cards/[id]", query: { id: `${randomNr}` } }}>
          RANDOM CARD
        </Link>
      </>
    </div>
  );
}
