import React, { useState } from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import SearchBar from "./components/SearchBar";
import "./components/SearchBar/index.css";
import styled from "styled-components";
import Navbar from "./layouts/Navbar";
import Sidebar from "./layouts/Sidebar";
import Games from "./layouts/Games";
import fetchData from "./api/rawg";
import Chips from "./components/Chips";
function App() {
  const [products, setProducts] = useState([]);
  const [games,setGames] = useState([]);
  const handleProductChange = (value: any) => {
    setProducts(value);
  };
  const Container = styled.div`
    display: flex;
    flex-direction: column;
`;
  return (
    <div style={{background:"#0c0d21"}}>
          <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} isOpen={true} />

      <Navbar />
      <div style={{marginLeft:"400px"}} >
        <h1 style={{color:"white"}}> Games</h1>
        <div className="d-flex flex-row align-items-start justify-content-start">
          <Chips>#All</Chips>
          <Chips>#Recent</Chips>
          <Chips>#Upcoming</Chips>
          <Chips>#Top100</Chips>
        </div>
     <Games/>
      </div>
  </div>
  );
}

export default App;
