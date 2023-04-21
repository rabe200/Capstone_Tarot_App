import styled from "styled-components";
import Link from "next/link";
import ArrowIcon from "../StyledArrow1";
import StyledArrowContainerLeft from "../StyledArrowContainerLeft";
import StyledArrowContainerRight from "../StyledArrowContainerRight";
import ArrowIconRight from "../StyledArrowRight";

const StyledMenu = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 301px;
  height: 48px;
  bottom: 0;
  background: #6f6f6f;
  border: 5px solid #000000;
  text-align: center;
`;

export const StyledLinkGroup = styled(Link)`
  display: flex;
  justify-content: center;
  gap: 20rem;
  margin: 0.3rem 0;
  color: #04120e;
  &:hover,
  &:focus {
    color: magenta;
  }
`;

export const Arrow = styled.div`
  box-sizing: border-box;
  position: absolute;
  bottom: 10px;
  left: 10px;
  width: 19px;
  height: 0px;
  border: 3px solid #000000;
`;

export default function StyledMenuBar({
  children,
  query1,
  query2,
  onClick1,
  onClick2,
}) {
  return (
    <StyledMenu>
      {" "}
      <Link href={`${query1}`} onClick={onClick1}>
        <StyledArrowContainerLeft>
          <ArrowIcon />
        </StyledArrowContainerLeft>
      </Link>
      {children}
      <Link href={`${query2}`} onClick={onClick2}>
        <StyledArrowContainerRight>
          <ArrowIconRight />
        </StyledArrowContainerRight>
      </Link>
    </StyledMenu>
  );
}
