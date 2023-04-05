import Link from "next/link";
import BackButton from "../navigation/backbutton/backbutton";
import { useRef, useEffect } from "react";

export default function NoteFormular({}) {
  const inputReference = useRef(null);
  useEffect(() => {
    inputReference.current.focus();
  }, []);

  return (
    <form action="/send-data-here" method="post">
      <textarea type="text" id="first" name="textarea" ref={inputReference} />
      <label for="textarea">
        <figcaption>Take A Note</figcaption>
      </label>
      <BackButton />
      <Link
        href={{
          pathname: "/",
        }}
      >
        <button type="button">end</button>
      </Link>
    </form>
  );
}
