import Link from "next/link";

export default function NotesButton({ card }) {
  <Link href={`/cards/${card.id}/notes`}>
    <button type="button" aria-label="go to notes">
      notes
    </button>
  </Link>;
}
