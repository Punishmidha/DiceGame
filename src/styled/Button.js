import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 18px;
  border-radius: 5px;
  background: black;
  color: white;
  min-width: 220px;
  border: none;
  border: 1px solid transparent;
  font-size: 16px;
  transition: 0.4s background ease-in;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;
  &:hover {
    opacity: 0.4;
  }
`;
