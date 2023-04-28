import styled from "styled-components";

const StyledSvg = styled.svg`
  stroke: ${(prop) => prop.theme.colorText};
  fill: ${(prop) => prop.theme.colorText};
  &:hover {
    stroke: magenta;
    fill: magenta;
  }
`;

export default function ArrowIconRight(props) {
  return (
    <StyledSvg
      width={21}
      height={24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      stroke={`${(props) => props.theme.colorArrow}`}
      fill={`${(props) => props.theme.colorArrow}`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.06 13.06a1.5 1.5 0 000-2.12l-9.545-9.547a1.5 1.5 0 10-2.122 2.122L16.88 12l-8.486 8.485a1.5 1.5 0 102.122 2.122l9.546-9.546zM0 13.5h19v-3H0v3z"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </StyledSvg>
  );
}
