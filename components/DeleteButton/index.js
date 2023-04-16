import React, { useState, useEffect } from "react";
import { useStore } from "../../pages/store";

export default function DeleteButton({ uuid }) {
  const [clicked, setClicked] = useState("false");
  const [hasMounted, setHasMounted] = React.useState(false);
  const findCardByUuid = useStore((state) => state.findCardByUuid);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  if (uuid)
    return (
      <button type="button" onClick={findCardByUuid(uuid)} clicked={clicked}>
        delete{}
      </button>
    );
  else {
    return <button type="button">loading</button>;
  }
}
