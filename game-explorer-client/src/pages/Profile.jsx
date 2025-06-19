import React, { useContext, useState, useEffect } from "react";
import { FavoritesContext } from "../contexts/FavoritesContext";
import Header from "../components/Header/Header";
import styles from "./Profile.module.css";

function Profile() {
  const { favorites, removeFavorite } = useContext(FavoritesContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 500); // Simulate loading
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <section className={styles.wrapper}>
        <h1>Your Favorite Games</h1>
        {loading ? (
          <div className={styles.spinner}></div>
        ) : favorites.length === 0 ? (
          <p>No favorites yet. Go save some!</p>
        ) : (
          <div className={styles["game-grid"]}>
            {favorites.map((game) => (
              <div key={game.id} className={styles.card}>
                <h3 className={styles.title}>{game.name}</h3>
                <img
                  src={game.background_image}
                  alt={game.name}
                  className={styles.image}
                />
                <button onClick={() => removeFavorite(game.id)}>Remove</button>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}

export default Profile;
