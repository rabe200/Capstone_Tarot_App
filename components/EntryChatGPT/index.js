import { useState } from "react";
import useStore from "../../src/store/store";

export default function EntryChatGPT() {
  const [questionInput, setQuestionInput] = useState("");
  const [result, setResult] = useState();
  const userData = useStore((state) => state.currentCard);
  console.log(userData);
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: questionInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      setResult(data.result);
    } catch (error) {
      console.log(error);
    }

    return;
  }
  console.log(result);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend></legend>
          <>
            <>
              <label htmlFor="question">Talk to a witch now </label>
              <br />
              <input
                type="text"
                name="question"
                id="question"
                placeholder="Gib deine Frage ein ..."
                value={questionInput}
                onChange={(event) =>
                  setQuestionInput(userData.name, userData.clicks)
                }
                style={{ width: "500px", height: "599px" }}
              />
              <button type="submit">Frage absenden</button>
            </>
          </>
        </fieldset>
      </form>
    </>
  );
}
