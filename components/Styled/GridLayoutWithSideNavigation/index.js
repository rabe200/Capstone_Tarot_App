import styled from "styled-components";
import Link from "next/link";
import ArrowIconLeft from "../ArrowIconLeft";
import ArrowIconRight from "../ArrowIconRight";

const Styled3Grid = styled.div`
  display: grid;
  grid-template-columns: 0.1fr 0.8fr 0.1fr;
  background: palevioletred;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ArrowContainer = styled.div`
  display: grid;
  grid-template-rows: 70% 30%;
  height: 100%;
  align-items: center;
`;

export default function GridLayout3Columns({
  children,
  query1,
  query2,
  onClick1,
  onClick2,
  navigation,
}) {
  return (
    <Styled3Grid>
      <ArrowContainer onClick={onClick1}>
        <div></div>
        <Link href={query1} hidden={navigation}>
          <ArrowIconLeft />
        </Link>
      </ArrowContainer>

      {children}

      <ArrowContainer onClick={onClick2}>
        <div></div>
        <Link href={query2} hidden={navigation}>
          <ArrowIconRight />
        </Link>
      </ArrowContainer>
    </Styled3Grid>
  );
}
