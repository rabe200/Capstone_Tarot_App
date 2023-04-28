import styled from "styled-components";
import Link from "next/link";
import ArrowIconLeft from "../ArrowIconLeft";
import ArrowIconRight from "../ArrowIconRight";

const Styled3Grid = styled.div`
  display: grid;
  grid-template-columns: 0.1fr 0.8fr 0.1fr;
  justify-content: center;
  align-items: center;
  width: 375px;
  height: 100%;
  box-shadow: 20px 0px 151px ${(p) => p.theme.colorFront} inset;
  overflow: hidden;

  color: ${(p) => p.theme.colorContainer};
  position: relative;
  margin: 0;
  padding: 0;

  @media only screen and (min-width: 414px) {
    width: 414px;
    height: 100%;
  }

  @media only screen and (min-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;

const ArrowContainer = styled.div`
  display: grid;
  grid-template-rows: 50% 30% 20%;
  height: 480px;
  align-items: center;
  background: ${(p) => p.theme.colorDeep};
  box-shadow: 0px 22px 15px ${(p) => p.theme.colorFront};
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;

  @media only screen and (min-width: 414px) {
    width: 414px;
    height: 100%;
  }

  @media only screen and (min-height: 800px) {
    width: 100%;
    height: 100%;
  }
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
