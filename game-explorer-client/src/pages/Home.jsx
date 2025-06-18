import React, { useEffect, useState } from "react";
import { fetchPopularGames } from "../utils/api";

function Home() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchPopularGames().then(setGames);
  }, []);

  return (
    <section>
      <h1>Popular Games</h1>
      {games.length === 0 ? (
        <p>Loading games...</p>
      ) : (
        <ul>
          {games.map((game) => (
            <li key={game.id}>
              <strong>{game.name}</strong>
              <br />
              <img src={game.background_image} alt={game.name} width="250" />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Home;
