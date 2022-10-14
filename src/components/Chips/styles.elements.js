import styled from "styled-components";

export const ChipsWrapper = styled.button`
  background: #1B1C30;
  color: white;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  border-radius: 8px;
  &:hover {
    outline: "1px solid #6B38FB";
  }
  &:focus {
    outline: "1px solid #6B38FB";
  }
`;
export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
