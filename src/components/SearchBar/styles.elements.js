import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: start;
align-items: flex-start;
border:2px solid #5E6271;
width:fit-content;
border-radius:10px;
`;
export const InputWrapper = styled.div`
 width: 100%;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem 0 1rem;
  border-radius: 0.8rem;
  background: transparent;
  box-sizing: border-box;

`;
export const SearchInput = styled.input`
  font-size: 1rem;
  color: white;
  width: 100%;
  height: 100%;
  padding: 0 0 0 1rem;
  background: transparent;
  border: none;
  outline: none;
`;