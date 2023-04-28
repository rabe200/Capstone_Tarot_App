import { useState } from "react";

export default function TarotReading({ UserData }) {
  const [prompt, setPrompt] = useState([""]);
  const [result, setResult] = useState();

  // console.log(UserData);
  // const promptData = {
  //   { dailyCard: UserData.name },
  //   { cardClicked: UserData.clicks },
  //   { averageMood: UserData.averageMood },
  //   { currentMood: UserData.currentMood },
  //   { dateCardDrawm: UserData.date },
  //   { cardDescription: UserData.description },
  //   { cardMeaning_Reversed: UserData.meaning_rev },
  //   { cardMeaning_Upside: UserData.meaning_up },
  //   { userNote: UserData.notes },
  //   { cardId: UserData.uuid },
  // };

  // console.log("prompt", JSON.stringify(promptData));
  async function handleSubmit(event) {
    event.preventDefault();
    setPrompt(document.getElementById("dailyCard").value);
    console.log(prompt);
    try {
      const response = await fetch("/api/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: UserData.dailyCard }),
      });

      const data = await response.json();
      if (response.status != 200) {
        throw (
          data.error ||
          new Error(`request failed with status ${response.status}`)
        );
      }

      setResult(data.result);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit} id="daForm">
        <fieldset>
          <legend>tarotreading</legend>
          <>
            <p>gemüt: {prompt}</p>
            <p>antwort: {result}</p>
          </>
          : (
          <>
            <label htmlFor="cardName">cardName</label>
            <input
              type="text"
              name="dailyCard"
              id="dailyCard"
              placeholder="don't be shy"
              value={UserData.name}
            />

            <label htmlFor="amountCardHasBeenDrawn">
              amount card has been drawn
            </label>
            <input
              type="text"
              name="amountCardHasBeenDrawn"
              id="amountCardHasBeenDrawn"
              placeholder="don't be shy"
              value={UserData.clicks}
            />
            <button type="submit">get reading now</button>
          </>
          )
        </fieldset>
      </form>
    </>
  );
}
