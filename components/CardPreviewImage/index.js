import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const CardBody = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 0;
  height: 475px;
`;

const NameBanner = styled.div`
  background-color: white;
  width: 90%;
  text-align: center;
  overflow-y: auto;
  height: 145px;
`;

export default function CardPreviewImage({ card, clickable }) {
  return (
    <div>
      {clickable === true ? (
        <>
          <CardBody>
            <Link href={`/cards/${card.id}/detail`}>
              {" "}
              <Image
                src={card.image}
                width="200"
                height="350"
                alt={card.name}
              />
            </Link>
            <NameBanner>{card.desc}</NameBanner>
          </CardBody>
        </>
      ) : (
        <CardBody>
          <Image src={card.image} width="200" height="350" alt={card.name} />
          <NameBanner>
            <b>up: </b>
            {card.meaning_up} <b>rev:</b> {card.meaning_rev}
          </NameBanner>
        </CardBody>
      )}
    </div>
  );
}
