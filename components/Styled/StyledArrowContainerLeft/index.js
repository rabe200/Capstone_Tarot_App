import styled from "styled-components";

const ContainerLeft = styled.div`
  box-sizing: border-box;
  position: absolute;
  bottom: -5px;
  width: 41px;
  height: 48px;
  background: #d9d9d9;
  border: 5px solid #000000;
  left: 0;
`;

export default function ({ children }) {
  return <ContainerLeft>{children}</ContainerLeft>;
}
