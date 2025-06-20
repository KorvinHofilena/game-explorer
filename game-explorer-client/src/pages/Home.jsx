import React, { useEffect, useState, useContext } from "react";
import { fetchPopularGames } from "../utils/api";
import GameCard from "../components/GameCard/GameCard";
import { FavoritesContext } from "../contexts/FavoritesContext";
import styles from "./Home.module.css";

function Home() {
  const [games, setGames] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const [loading, setLoading] = useState(true);
  const { addFavorite } = useContext(FavoritesContext);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPopularGames()
      .then((data) => {
        if (Array.isArray(data)) {
          setGames(data);
        } else {
          console.error("❌ Invalid data format:", data);
          setError("Sorry, something went wrong. Please try again later.");
          setGames([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(
          "Sorry, something went wrong during the request. Please try again later."
        );
        setLoading(false);
      });
  }, []);

  const showMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.heading}>Popular Games</h1>

      {loading ? (
        <div className={styles.spinner}></div>
      ) : error ? (
        <p className={styles.error}>{error}</p>
      ) : games.length === 0 ? (
        <p className={styles.error}>Nothing found.</p>
      ) : (
        <>
          <div className={styles.gameGrid}>
            {games.slice(0, visibleCount).map((game) => (
              <GameCard key={game.id} game={game} onSave={addFavorite} />
            ))}
          </div>

          {visibleCount < games.length && (
            <button className={styles.showMore} onClick={showMore}>
              Show More
            </button>
          )}
        </>
      )}
    </section>
  );
}

export default Home;
