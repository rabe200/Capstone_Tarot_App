import styled from "styled-components";

const StyledAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 375px;
  background-color: #293133;
  height: 667px;
  justify-content: center;
  align-items: center;
`;

export default function AppContainer({ children }) {
  return <StyledAppContainer>{children}</StyledAppContainer>;
}
