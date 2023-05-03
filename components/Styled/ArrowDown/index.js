import styled from "styled-components";

const StyledSvg = styled.svg`
  stroke: ${(prop) => prop.theme.colorFront};
  fill: ${(prop) => prop.theme.colorFront};

  opacity: 33%;
  position: absolute;
  top: -18px;

  &:hover {
    stroke: aqua;
    fill: aqua;
  }
`;

export default function ArrowDown(props) {
  return (
    <StyledSvg
      viewBox="-12 -12 24 24"
      width={50}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <polyline points="-10,0 0,10 10,0" />
    </StyledSvg>
  );
}
