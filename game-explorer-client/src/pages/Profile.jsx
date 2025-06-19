import React, { useContext, useState, useEffect } from "react";
import { FavoritesContext } from "../contexts/FavoritesContext";
import GameCard from "../components/GameCard/GameCard";
import PageWrapper from "../components/PageWrapper/PageWrapper";
import styles from "./Home.module.css"; // Use Home styles for layout

function Profile() {
  const { favorites, removeFavorite } = useContext(FavoritesContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <PageWrapper>
      <section className={styles.wrapper}>
        <h1>Your Favorite Games</h1>
        {loading ? (
          <div className={styles.spinner}></div>
        ) : favorites.length === 0 ? (
          <p style={{ textAlign: "center", marginTop: "2rem" }}>
            No favorites yet. Go save some!
          </p>
        ) : (
          <div className={styles.gameGrid}>
            {favorites.map((game) => (
              <GameCard
                key={game.id}
                game={game}
                onRemove={removeFavorite}
                isFavorite
              />
            ))}
          </div>
        )}
      </section>
    </PageWrapper>
  );
}

export default Profile;
