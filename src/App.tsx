import React, { useState } from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import SearchBar from "./components/SearchBar";
import "./components/SearchBar/index.css";
import styled from "styled-components";
import Navbar from "./layouts/Navbar";
function App() {
  const [products, setProducts] = useState([]);
  const handleProductChange = (value: any) => {
    setProducts(value);
  };
  const Container = styled.div`
    display: flex;
    flex-direction: column;
  `;
  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
