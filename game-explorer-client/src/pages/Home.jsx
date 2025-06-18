import React, { useEffect, useState, useContext } from "react";
import { fetchPopularGames } from "../utils/api";
import GameCard from "../components/GameCard/GameCard";
import { FavoritesContext } from "../contexts/FavoritesContext";
import styles from "./Home.module.css";

function Home() {
  const [games, setGames] = useState([]);
  const { addFavorite } = useContext(FavoritesContext);

  useEffect(() => {
    fetchPopularGames().then(setGames);
  }, []);

  return (
    <section>
      <h1>Popular Games</h1>
      {games.length === 0 ? (
        <p>Loading games...</p>
      ) : (
        <div className={styles["game-grid"]}>
          {games.map((game) => (
            <GameCard key={game.id} game={game} onSave={addFavorite} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Home;
