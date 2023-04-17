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

export const useStore = createLocalStorageStore(
  (set, get) => ({
    allCards: cards,
    drawnCards: [],
    cardsDrawn: 0,
    cardsDeleted: 0,
    difference: 0,
    clicks: 0,
    currentCard: { id: 0, name: "the fool" },
    lastCard: { id: 0, name: "the fool" },
    currentNote: "",
    searchQuery: "testString",
    cardMoods: cardMoodArray,
    setCardClicks: () => set((state) => ({})),
    setCardMoodPlusOne: (name) => {
      let newEntry = get().cardMoods.find((card) => card.name === name);
      const filteredArray = get().cardMoods.filter(
        (card) => card.name !== newEntry.name
      );
      newEntry.mood / newEntry.clicks <= 1
        ? (newEntry = {
            ...newEntry,
            mood: newEntry.mood + 1,
            clicks: newEntry.clicks + 1,
            avgMood: (newEntry.mood + 1) / (newEntry.clicks + 1),
          })
        : (newEntry = {
            ...newEntry,
            mood: newEntry.mood + 1,
            clicks: newEntry.clicks + 1,
            avgMood: 1,
          });
      set(() => ({ cardMoods: [newEntry].concat(filteredArray) }));
    },
    setCardMoodMinusOne: (name) => {
      let newEntry = get().cardMoods.find((card) => card.name === name);
      const filteredArray = get().cardMoods.filter(
        (card) => card.name !== newEntry.name
      );
      newEntry.mood / newEntry.clicks > 1
        ? (newEntry = {
            ...newEntry,
            mood: newEntry.mood - 1,
            clicks: newEntry.clicks + 1,
            avgMood: (newEntry.mood + 1) / (newEntry.clicks + 1),
          })
        : (newEntry = {
            ...newEntry,
            mood: 0,
            clicks: newEntry.clicks + 1,
            avgMood: 0,
          });
      set(() => ({ cardMoods: [newEntry].concat(filteredArray) }));
    },
    setCardAvgMood: () => set((state) => ({})),
    setCardsDeleted: () =>
      set((state) => ({ cardsDeleted: state.cardsDeleted + 1 })),
    setLastCard: () => set((state) => ({ lastCard: state.currentCard })),
    getAllCards: () => {
      get().drawnCards;
    },
    setSearchQuery: (input) => set(() => ({ searchQuery: input })),
    setCurrentCard: (difference) => {
      if (get().difference > 1) {
        set((state) => ({
          currentCard: state.drawnCards[difference - 1],
        }));
      } else {
        set((state) => ({
          currentCard: state.drawnCards[0],
        }));
      }
    },
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
      if (
        get().drawnCards.length > 0 &&
        get().currentNote !== "" &&
        get().difference > 0
      ) {
        set((state) => ({
          currentCard: state.drawnCards
            .filter((card) => card.uuid === state.currentCard.uuid)
            .reduce((acc) => acc),
        }));
      } else alert("conditions not met");
    },
    updateCardsDrawn: () =>
      set((state) => ({ difference: state.cardsDrawn - state.cardsDeleted })),
    editSelectedNote: (card) => {
      const itemToEdit = get().drawnCards.find((item) => {
        return item.uuid === card.uuid;
      });
      const filteredArray = get().drawnCards.filter(
        (card) => card.uuid !== itemToEdit.uuid
      );
      const newArray = {
        arrayIndex: itemToEdit.arrayIndex,
        uuid: itemToEdit.uuid,
        id: itemToEdit.id,
        name: itemToEdit.name,
        image: itemToEdit.image,
        description: itemToEdit.desc,
        meaning_up: itemToEdit.meaning_up,
        meaning_rev: itemToEdit.meaning_rev,
        notes: get().currentNote,
        type: itemToEdit.type,
        value: itemToEdit.value,
      };
      const newDrawnCards = filteredArray.concat(newArray);
      set(() => {
        return { drawnCards: newDrawnCards };
      });
    },
    copyCurrentNote: () => {
      if (get().difference > 0) {
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
        const newDrawnCards = filteredArray.concat(newArray);
        set(() => {
          return { drawnCards: newDrawnCards };
        });
      } else {
        alert("no cards in history - add some cards to enable saving");
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
