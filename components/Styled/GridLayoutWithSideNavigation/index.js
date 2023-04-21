import styled from "styled-components";
import Link from "next/link";
import ArrowIconLeft from "../ArrowIconLeft";
import ArrowIconRight from "../ArrowIconRight";

const Styled3Grid = styled.div`
  display: grid;
  grid-template-columns: 50px 200px 50px;
  background: palevioletred;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export default function GridLayout3Columns({
  children,
  query1,
  query2,
  onClick1,
  onClick2,
}) {
  return (
    <Styled3Grid>
      <div onClick={onClick1}>
        <Link href={query1}>
          <ArrowIconLeft />
        </Link>
      </div>

      {children}

      <div onClick={onClick2}>
        <Link href={query2}>
          <ArrowIconRight />
        </Link>
      </div>
    </Styled3Grid>
  );
}
