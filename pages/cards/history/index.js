import { Fragment, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function History({ usedIds }) {
  const [elements, setElements] = useState([]);

  function getElementsfromLocalStorage(ids) {
    let elements = [];
    ids.forEach((id) => {
      const storedElements = JSON.parse(localStorage.getItem(id));
      if (storedElements) {
        elements = elements.concat(storedElements);
      }
    });
    return elements;
  }

  const filteredUsedIds = usedIds.filter(
    (value, index) => usedIds.indexOf(value) === index
  );

  useEffect(() => {
    const storedElements = localStorage.getItem("elements");
    if (storedElements) {
      setElements(JSON.parse(storedElements));
    }
  }, []);

  return filteredUsedIds.map((id) => {
    const filteredStoredElements = getElementsfromLocalStorage([id]);
    console.log(filteredStoredElements);
    return (
      <Fragment key={uuidv4()}>
        {filteredStoredElements.map((element) => (
          <p key={element.date}>
            {element.date}__ {element.cardname}__{element.note}__ mood:{" "}
            {element.mood}
          </p>
        ))}
      </Fragment>
    );
  });
}
