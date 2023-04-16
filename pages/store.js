import { create } from "zustand";
import { createStore } from "zustand";
import { persist } from "zustand/middleware";
import { getCardById } from "../lib/data";
import { useState, useEffect } from "react";
import { v4 as uuidv4, v4 } from "uuid";

function randomNumber() {
  return Math.floor(Math.random() * 77);
}

const itemID = randomNumber();
const dailyCard = getCardById(itemID);

export const useStore = createLocalStorageStore(
  (set, get) => ({
    drawnCards: [],
    cardsDrawn: 0,
    clicks: 0,
    currentCard: {},
    currentNote: "",
    setCurrentCard: () =>
      set((state) => ({ currentCard: state.drawnCards[state.cardsDrawn - 1] })),
    increaseCardsDrawn: () =>
      set((state) => ({ cardsDrawn: state.cardsDrawn + 1 })),
    addClick: () => set((state) => ({ clicks: state.clicks + 1 })),
    minusClick: () => set((state) => ({ clicks: state.clicks - 1 })),
    resetClicks: () => set(() => ({ clicks: 0 })),
    setCurrentNote: (input) => set(() => ({ currentNote: input })),
    findCardByUuid: (input) => {
      const card = get().drawnCards.filter((prop) => prop.uuid === input);
      console.log("storeScope", card);
    },
    copyCurrentNote: () => {
      const newArray = get()
        .drawnCards.filter((note) => note.arrayIndex === get().cardsDrawn - 1)
        .map(
          (props) =>
            (props = {
              uuid: v4(),
              id: get().currentCard.id,
              name: get().currentCard.name,
              image: get().currentCard.image,
              description: get().currentCard.description,
              meaning_up: get().currentCard.meaning_up,
              meaning_rev: get().currentCard.meaning_rev,
              notes: get().currentNote,
            })
        )
        .reduce((acc, currentValue) => acc);
      console.log(newArray);
      set((state) => {
        return {
          drawnCards: [...get().drawnCards, newArray],
        };
      });
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
              id: dailyCard.id,
              name: dailyCard.name,
              mood,
              clicks: state.clicks,
              averageMood,
              date,
              image: dailyCard.image,
              description: dailyCard.desc,
              meaning_up: dailyCard.meaning_up,
              meaning_rev: dailyCard.meaning_rev,
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
