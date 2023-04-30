import styled from "styled-components";

const StyledFrame = styled.div`
  background: ${(p) => p.theme.colorContainer};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export default function Frame({ children }) {
  return <StyledFrame>{children}</StyledFrame>;
}
