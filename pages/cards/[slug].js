import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";

export const CardBody = styled.div`
  height: 500px;
  width: 300px;
  background-color: crimson;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Platzhalter = styled.div`
  height: 400px;
  width: 300px;
`;

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function CardList() {
  const router = useRouter();
  const { slug } = router.query;

  const { data, isLoading, error } = useSWR(`/api/tarot/${slug}`, fetcher);

  if (isLoading) return <>isLoading</>;
  if (error) return <>error</>;
  if (data) {
    return (
      <>
        <CardBody>
          <h1>{data.value}</h1>
          <Platzhalter></Platzhalter>
          <h2>{data.name}</h2>
        </CardBody>
      </>
    );
  } else {
    return <>wait...</>;
  }
}
