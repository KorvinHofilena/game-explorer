import React, { useEffect, useState, useContext } from "react";
import { fetchPopularGames } from "../utils/api";
import GameCard from "../components/GameCard/GameCard";
import { FavoritesContext } from "../contexts/FavoritesContext";
import styles from "./Home.module.css";

function Home() {
  const [games, setGames] = useState([]);
  const { addFavorite } = useContext(FavoritesContext);
  const [loading, setLoading] = useState(true); // 🔹 NEW

  useEffect(() => {
    fetchPopularGames().then((data) => {
      setGames(data);
      setLoading(false); // 🔹 NEW
    });
  }, []);

  return (
    <section>
      <h1>Popular Games</h1>
      {loading ? ( // 🔹 UPDATED condition
        <div className={styles.spinner}></div>
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
