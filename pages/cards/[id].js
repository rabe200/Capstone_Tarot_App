import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
export const CardBody = styled.div`
  height: 500px;
  width: 300px;
  background-color: crimson;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NameBanner = styled.h2`
  background-color: white;
  width: 90%;
  text-align: center;
`;

export default function ShowCard({ cards }) {
  const router = useRouter();
  const { id } = router.query;
  if (id) {
    return (
      <>
        <CardBody>
          <h1>{cards[id].value}</h1>
          <Image
            src={cards[id].image}
            width="200"
            height="350"
            alt="tarotcard"
          />
          <NameBanner>{cards[id].name}</NameBanner>
        </CardBody>
      </>
    );
  } else {
    return <p>loading</p>;
  }
}
