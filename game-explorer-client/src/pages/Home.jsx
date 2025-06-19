import React, { useEffect, useState, useContext } from "react";
import { fetchPopularGames } from "../utils/api";
import GameCard from "../components/GameCard/GameCard";
import { FavoritesContext } from "../contexts/FavoritesContext";
import styles from "./Home.module.css";

function Home({ setLoading }) {
  const [games, setGames] = useState([]);
  const { addFavorite } = useContext(FavoritesContext);
  const [loading, setLocalLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchPopularGames().then((data) => {
      setGames(data);
      setLocalLoading(false);
      setLoading(false);
    });
  }, [setLoading]);

  return (
    <section className={styles.wrapper}>
      <h1 className={loading ? styles.centeredTitle : ""}>Popular Games</h1>
      {loading ? (
        <div className={styles.spinner}></div>
      ) : (
        <div className={styles.gameGrid}>
          {games.map((game) => (
            <GameCard key={game.id} game={game} onSave={addFavorite} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Home;
