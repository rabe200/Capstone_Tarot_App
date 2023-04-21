import styled from "styled-components";
import Link from "next/link";
import ArrowIconLeft from "../ArrowIconLeft";
import StyledArrowContainerLeft from "../StyledArrowContainerLeft";
import StyledArrowContainerRight from "../StyledArrowContainerRight";
import ArrowIconRight from "../ArrowIconRight";
const StyledMenu = styled.div`
  box-sizing: border-box;

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

export default function StyledMenuBarIndex({ children, onClick1, onClick2 }) {
  return (
    <StyledMenu>
      {" "}
      <div onClick={onClick1}>
        <StyledArrowContainerLeft>
          <ArrowIconLeft />
        </StyledArrowContainerLeft>
      </div>
      {children}
      <div onClick={onClick2}>
        <StyledArrowContainerRight>
          <div>
            <ArrowIconRight />
          </div>
        </StyledArrowContainerRight>
      </div>
    </StyledMenu>
  );
}
