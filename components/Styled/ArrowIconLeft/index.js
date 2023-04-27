import styled from "styled-components";

const StyledSvg = styled.svg`
  stroke: ${(prop) => prop.theme.colorArrow};
  fill: ${(prop) => prop.theme.colorArrow};

  &:hover {
    stroke: aqua;
    fill: aqua;
  }
`;

export default function ArrowIconLeft(props) {
  return (
    <StyledSvg
      transform="skew(2deg 2deg)"
      width={21}
      height={24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.94 10.94a1.5 1.5 0 000 2.12l9.545 9.547a1.5 1.5 0 102.122-2.122L4.12 12l8.486-8.485a1.5 1.5 0 10-2.122-2.122L.94 10.94zM21 10.5H2v3h19v-3z"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </StyledSvg>
  );
}
