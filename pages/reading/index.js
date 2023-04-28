import EntryChatGPT from "../../components/EntryChatGPT";
import useStore from "../../src/store/store";

export default function TheReading() {
  const UserData = useStore((state) => state.currentCard);
  console.log(UserData);
  return <EntryChatGPT />;
}
