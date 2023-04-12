import useLocalStorage from "use-local-storage";
import DetailsButton from "../../../components/DetailsButton";
import BackButton from "../../../components/Backbutton/backbutton";

export default function Details({}) {
  const [searchquery] = useLocalStorage("searchquery");
  return (
    <>
      {searchquery.map((result) => {
        return (
          <>
            <p>
              <b>{result.name}</b> <DetailsButton id={result.id} />
            </p>
          </>
        );
      })}
      <BackButton />
    </>
  );
}
