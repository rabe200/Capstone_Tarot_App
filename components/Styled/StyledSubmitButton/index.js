import styled from "styled-components";

const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: black;
  color: white;
  text-align: center;
  height: 40px;
  border-radius: 8px;
  font-size: 2rem;
  font-family: pixelOperator;
  &:hover {
    background-color: yellow;
    color: black;
    border: 2px solid white;
    font-size: 3rem;
  }
`;

export default function StyledSubmitButton({ children }) {
  return (
    <SubmitButton
      form="textInput"
      type="submit"
      name="submit"
      aria-label="submit button"
    >
      {children}
    </SubmitButton>
  );
}
