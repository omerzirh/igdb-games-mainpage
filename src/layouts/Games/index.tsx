import React from "react";
import { CardsWrapper } from "./styles.element";
import GameCard from "../GameCard";
import fetchData from "../../api/rawg";
import { useQuery } from "react-query";

export default function Index() {
  const { data, isLoading } = useQuery("data", () => {
    return fetchData("games").then((data: any) => data.results);
  });
  if (isLoading) return <h1 style={{ color: "white" }}>Loading...</h1>;

  return (
    <CardsWrapper>
      {data?.map((gm: any) => (
        <GameCard
          title={gm.name}
          subtitle={gm.name}
          description={gm.slug}
          image={gm.background_image}
          key={gm.id}
        />
      ))}
    </CardsWrapper>
  );
}
