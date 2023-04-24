import styled from "styled-components";
import { useState } from "react";

const CardContainer = styled.div`
  width: 250px;
  height: 365px;
  perspective: 2000px;
`;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${({ isFlipped }) =>
    isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"};
`;

const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: scaleX(-1);
`;

const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  color: black;
`;

const CardImage = styled.img`
  border-radius: 8px;
`;

const CardFlip = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div onClick={handleFlip}>
      <CardContainer>
        <CardInner isFlipped={isFlipped}>
          <CardFront>
            <CardImage
              src={card.image}
              alt={card.name}
              width={200}
              height={350}
            />
          </CardFront>
          <CardBack>
            <CardImage
              src={"/images/CardBacks.png"}
              alt={"cardback"}
              width={200}
              height={350}
            ></CardImage>
          </CardBack>
        </CardInner>
      </CardContainer>
    </div>
  );
};

export default CardFlip;
