import React, { useEffect, useState } from "react";
import {
  CardsWrapper,
  Container,
  GamesHeader,
  GamesWrapper,
} from "./styles.element";
import GameCard from "../GameCard";
import Chips from "../../components/Chips";
import fetchData from "../../api/rawg";
import { chipsData } from "../../api/data";

const chipsStyle = { background: "transparent", border: "none" };
export default function Index() {
  const [games, setGames] = useState([]);
  const [clickedChip, setClickedChip] = useState("");
  useEffect(() => {
    try {
      fetchData("games").then((data) => setGames(data.results));
    } catch (error) {
      console.log(error);
    }
  }, []);
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
        <CardsWrapper>
          {games.map((gm: any) => (
            <GameCard
              title={gm.name}
              subtitle={gm.name}
              description={gm.slug}
              image={gm.background_image}
            />
          ))}
        </CardsWrapper>
      </GamesWrapper>
    </Container>
  );
}
