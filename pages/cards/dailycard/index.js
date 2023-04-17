import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import useStore from "../../../src/store/store";
import React from "react";
import CardPreviewImage from "../../../components/CardPreviewImage";

const StyledLink = styled(Link)`
  background-color: hotpink;
`;

export default function ShowCard() {
  const currentCard = useStore((state) => state.currentCard);
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  if (currentCard) {
    return (
      <>
        <CardPreviewImage card={currentCard} />
        <StyledLink
          href={{
            pathname: "/cards/dailycard/description",
          }}
        >
          more Details
        </StyledLink>
      </>
    );
  } else {
    return null;
  }
}
