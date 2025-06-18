import React, { useEffect, useState } from "react";
import { fetchPopularGames } from "../utils/api";
import GameCard from "../components/GameCard";

function Home() {
  const [games, setGames] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchPopularGames().then(setGames);
  }, []);

  function handleSave(game) {
    const alreadySaved = favorites.some((g) => g.id === game.id);
    if (!alreadySaved) {
      setFavorites([...favorites, game]);
    }
  }

  return (
    <section>
      <h1>Popular Games</h1>
      {games.length === 0 ? (
        <p>Loading games...</p>
      ) : (
        <div className="game-grid">
          {games.map((game) => (
            <GameCard key={game.id} game={game} onSave={handleSave} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Home;
