import React, { useContext, useState, useEffect } from "react";
import { FavoritesContext } from "../contexts/FavoritesContext";
import GameCard from "../components/GameCard/GameCard";
import styles from "./Profile.module.css";

function Profile({ setLoading }) {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timeout);
  }, [setLoading]);

  return (
    <section className={styles.wrapper}>
      <h1>Your Favorite Games</h1>
      {favorites.length === 0 ? (
        <p className={styles.emptyState}>No favorites yet. Go save some!</p>
      ) : (
        <div className={styles.gameGrid}>
          {favorites.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              onRemove={() => removeFavorite(game.id)}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Profile;
