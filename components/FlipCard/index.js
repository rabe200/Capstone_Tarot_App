import styled from "styled-components";
import { useState } from "react";
import Image from "next/image";
const CardContainer = styled.div`
  width: 300px;
  height: 450px;
`;

const CardImage = styled(Image)`
  border-radius: 8px;
`;

const CardFlip = ({ card }) => {
  const [hidden, setHidden] = useState(true);

  return (
    <CardContainer onClick={() => setHidden(false)}>
      <CardImage
        hidden={hidden}
        src={card.image}
        alt={card.name}
        width={300}
        height={450}
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
