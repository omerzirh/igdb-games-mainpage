import React, { useEffect, useState } from "react";
import { Container } from "./styles.element";
import GameCard from "../GameCard";
import fetchData from "../../api/rawg";
export default function Index() {
  const [games, setGames] = useState([]);

  console.log(fetchData("games"));
  useEffect(() => {
    try {
      fetchData("games").then((data) => setGames(data.results));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Container>
      {" "}
      {games.map((gm: any) => (
        <GameCard
          title={gm.name}
          subtitle={gm.name}
          description={gm.slug}
          image={gm.background_image}
        />
      ))}
    </Container>
  );
}
