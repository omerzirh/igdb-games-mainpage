import React from 'react'
import styled from 'styled-components'
import Main from "../layouts/Main";
const Container = styled.div`
margin-left:400px;
`;
export default function MainPage() {
  return (
    <Container>
    <Main />
  </Container>
  )
}
