import React, { useState } from "react";
import { Container, GamesHeader, GamesWrapper } from "./styles.element";
import Games from "../Games";
import Chips from "../../components/Chips";
import { chipsData } from "../../api/data";

const chipsStyle = { background: "transparent", border: "none" };
export default function Index() {
  const [clickedChip, setClickedChip] = useState("all_ch");

  const handleChipClick = (event: any) => {
    setClickedChip(event?.target.id);
  };
  return (
    <Container>
      {" "}
      <h1 style={{ color: "white" }}> Games</h1>
      <div className="d-flex flex-row align-items-start justify-content-start">
        {chipsData.map((elm: { id: String; name: String }) => (
          <Chips
            id={elm.id}
            key={elm.id}
            onClick={handleChipClick}
            style={elm.id !== clickedChip ? chipsStyle : null}
          >
            #{elm.name}
          </Chips>
        ))}
      </div>
      <GamesWrapper>
        <GamesHeader>Most Anticipated</GamesHeader>
        <Games />
      </GamesWrapper>
    </Container>
  );
}
