import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useState, useEffect } from "react";
import { v4 as uuidv4, v4 } from "uuid";
import { cards } from "../../lib/data";

const cardMoodArray = cards.map((card) => {
  return {
    name: card.name,
    id: card.id,
    mood: 0,
    clicks: 0,
    avgMood: 0.5,
  };
});
// console.log(cardMoodArray);

export const useStore = createLocalStorageStore(
  (set, get) => ({
    allCards: cards,
    drawnCards: [],
    cardsDrawn: 0,
    cardsDeleted: 0,
    clicks: 0,
    currentCard: { id: 0, name: "the fool" },
    currentNote: "",
    searchQuery: "testString",
    cardMoods: cardMoodArray,
    setCardsDeleted: () =>
      set((state) => ({ cardsDeleted: state.cardsDeleted + 1 })),
    getAllCards: () => {
      get().drawnCards;
    },
    setSearchQuery: (input) => set(() => ({ searchQuery: input })),
    setCurrentCard: (difference) =>
      set((state) => ({
        currentCard: state.drawnCards[state.cardsDrawn + difference],
      })),
    setRandomCard: (randomCard) => set(() => ({ currentCard: randomCard })),
    increaseCardsDrawn: () =>
      set((state) => ({ cardsDrawn: state.cardsDrawn + 1 })),
    addClick: () => set((state) => ({ clicks: state.clicks + 1 })),
    minusClick: () => set((state) => ({ clicks: state.clicks - 1 })),
    resetClicks: () => set(() => ({ clicks: 0 })),
    setCurrentNote: (input) => set(() => ({ currentNote: input })),
    setDrawnCardsByInput: (input) =>
      set((state) => {
        return { drawnCards: input };
      }),
    findCardByUuid: (input) => {
      const card = get().drawnCards.filter((prop) => prop.uuid === input);
    },
    getCardById: (id) => {
      let card;
      card = cards.filter((prop) => prop.id === id);
      return card;
    },
    getDrawnCardById: (input) => {
      let card;
      card = get().drawnCards.filter((prop) => prop.id === input);
      return card;
    },
    filterCardFromArray: (input) => {
      const newArray = get().drawnCards.filter((item) => item.uuid !== input);
      return newArray;
    },
    updateCurrentCardByNote: () => {
      if (get().drawnCards.length > 0 && get().currentNote !== "") {
        set((state) => ({
          currentCard: state.drawnCards
            .filter((card) => card.uuid === state.currentCard.uuid)
            .reduce((acc) => acc),
        }));
      }
    },
    copyCurrentNote: () => {
      if (get().drawnCards.length > 0) {
        const filteredArray = get().drawnCards.filter(
          (card) => card.uuid !== get().currentCard.uuid
        );
        const newArray = {
          arrayIndex: get().currentCard.arrayIndex,
          uuid: get().currentCard.uuid,
          id: get().currentCard.id,
          name: get().currentCard.name,
          image: get().currentCard.image,
          description: get().currentCard.desc,
          meaning_up: get().currentCard.meaning_up,
          meaning_rev: get().currentCard.meaning_rev,
          notes: get().currentNote,
          type: get().currentCard.type,
          value: get().currentCard.value,
        };
        console.log(newArray);
        const newDrawnCards = filteredArray.concat(newArray);
        set(() => {
          return { drawnCards: newDrawnCards };
        });
      } else {
        alert("no cards in history - add some cards to enable saving");
        console.log("no cards in history - add some cards to save note");
      }
    },
    drawCard: (
      uuid,
      id,
      name,
      mood,
      clicks,
      averageMood,
      date,
      description,
      meaning_up,
      meaning_rev,
      notes,
      arrayIndex
    ) => {
      set((state) => {
        return {
          drawnCards: [
            ...state.drawnCards,
            {
              uuid: v4(),
              id: get().currentCard.id,
              name: get().currentCard.name,
              mood,
              clicks: state.clicks,
              averageMood,
              date,
              image: get().currentCard.image,
              description: get().currentCard.desc,
              meaning_up: get().currentCard.meaning_up,
              meaning_rev: get().currentCard.meaning_rev,
              notes: "",
              arrayIndex: state.cardsDrawn,
            },
          ],
        };
      });
    },
  }),
  "cards"
);

function createLocalStorageStore(initialStore, name) {
  const useServerStore = create(initialStore);
  const useClientStore = create(persist(initialStore, { name }));

  function useStore(selector, compare) {
    const [hydrated, setHydrated] = useState("false");

    useEffect(() => {
      setHydrated(true);
    }, []);
    const clientStore = useClientStore(selector, compare);
    const serverStore = useServerStore(selector, compare);
    return hydrated ? clientStore : serverStore;
  }

  return useStore;
}

export default useStore;
