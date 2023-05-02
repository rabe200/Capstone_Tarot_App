import styled from "styled-components";
import { useState } from "react";
import Image from "next/image";

const CardContainer = styled.div`
  display: flex;
  transform: ${(p) => (p.reversed ? "scaleY(-1)" : null)};
`;

const CardImage = styled(Image)`
  border-radius: 14px;
`;

const CardFlip = ({ card }) => {
  const [hidden, setHidden] = useState(true);
  const reversed = card.reversed;

  return (
    <CardContainer onClick={() => setHidden(false)} reversed={reversed}>
      <CardImage
        hidden={hidden}
        src={card.image}
        alt={card.name}
        width={300}
        height={450}
        onClick={() => console.log(event.target)}
      />

      <CardImage
        hidden={!hidden}
        src={"/images/CardBacks.png"}
        alt={"cardback"}
        width={300}
        height={450}
      />
    </CardContainer>
  );
};

export default CardFlip;
