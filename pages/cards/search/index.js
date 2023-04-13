import useLocalStorage from "use-local-storage";
import DetailsButton from "../../../components/DetailsButton";
import BackButton from "../../../components/Backbutton/backbutton";

export default function SearchResult({}) {
  const [searchquery] = useLocalStorage("searchquery");

  if (!Array.isArray(searchquery) || searchquery.length === 0) {
    return (
      <>
        <p>no results</p>
        <BackButton />
      </>
    );
  }

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
