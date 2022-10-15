import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  color: inherit;
  background: white;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.borderRadius};
  transition: color 0.15s ease, border-color 0.15s ease;
  width: 100%;
  max-width: 592px;
  min-width: 280px;

  @media only screen and (max-width: 1439px) and (min-width: 1008px) {
    width: 581px;
  }
  @media only screen and (max-width: 640px) {
    border-radius: 0px;
    padding: 1.2rem;
  }
`;

export { Card };
