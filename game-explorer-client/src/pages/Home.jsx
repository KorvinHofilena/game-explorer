import React, { useEffect, useState, useContext } from "react";
import { fetchPopularGames } from "../utils/api";
import GameCard from "../components/GameCard/GameCard";
import { FavoritesContext } from "../contexts/FavoritesContext";
import Header from "../components/Header/Header";
import styles from "./Home.module.css";

function Home() {
  const [games, setGames] = useState([]);
  const { addFavorite } = useContext(FavoritesContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPopularGames().then((data) => {
      setGames(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <section className={styles.wrapper}>
        <h1>Popular Games</h1>
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
    </>
  );
}

export default Home;
