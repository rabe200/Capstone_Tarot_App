import DetailsButton from "../../../components/DetailsButton";
import BackButton from "../../../components/Backbutton/backbutton";
import { useStore } from "../../store";

export default function SearchResult() {
  // const [searchquery] = useLocalStorage("searchquery");
  const searchQuery = useStore((state) => state.searchQuery);
  if (searchQuery === "") {
    return (
      <>
        <p>no results</p>
        <BackButton />
      </>
    );
  }

  return (
    <>
      {searchQuery}
      <BackButton />
    </>
  );
}
