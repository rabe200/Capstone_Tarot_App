import { useState, useEffect } from "react";
import useStore from "../../../../src/store/store";
import { useRouter } from "next/router";
import styled from "styled-components";
import TopMenuBar from "../../../../components/Styled/StyledTopMenuBar";

import StyledNavbar from "../../../../components/Styled/StyledNavbar";
import Frame from "../../../../components/Frame";

const CardText = styled.div`
  display: flex;
  background: ${(p) => p.theme.colorContainer};
  color: ${(p) => p.theme.colorText};
`;

export default function History() {
  const [hasMounted, setHasMounted] = useState(false);
  const router = useRouter();
  const { uuid } = router.query;
  const drawnCards = useStore((state) => state.drawnCards);
  const [card] = drawnCards.filter((card) => card.uuid === uuid);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <Frame>
      <TopMenuBar query2={"/dailyCard"} mid={"history"} />
      <CardText>{card.notes}</CardText>
      <StyledNavbar />
    </Frame>
  );
}
