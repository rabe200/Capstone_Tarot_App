import styled from "styled-components";
import Link from "next/link";
const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  gap: 20rem;
  margin: 0.3rem 0;
  color: #04120e;
  font-size: 2rem;
  text-decoration: none;
  &:hover,
  &:focus {
    color: magenta;
  }
`;

export default function StyledMenuBarContent(query, queryName) {
  return <StyledLink href={`${query.query}`}>{query.queryName}</StyledLink>;
}
