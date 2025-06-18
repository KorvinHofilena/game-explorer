import React, { useContext } from "react";
import { FavoritesContext } from "../contexts/FavoritesContext";

function Profile() {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  return (
    <section>
      <h1>Your Favorite Games</h1>
      {favorites.length === 0 ? (
        <p>No favorites yet. Go save some!</p>
      ) : (
        <ul>
          {favorites.map((game) => (
            <li key={game.id}>
              <strong>{game.name}</strong>
              <br />
              <img src={game.background_image} alt={game.name} width="250" />
              <br />
              <button onClick={() => removeFavorite(game.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Profile;
