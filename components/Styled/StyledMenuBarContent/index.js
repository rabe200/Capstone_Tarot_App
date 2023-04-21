import styled from "styled-components";

const StyledArticle = styled.article`
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

export default function StyledMenuBarContent(query, queryName, children) {
  return (
    <StyledArticle>
      {query.queryName}
      {children}
    </StyledArticle>
  );
}
