import React, { createContext, useState } from "react";

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  function addFavorite(game) {
    if (!favorites.some((g) => g.id === game.id)) {
      setFavorites([...favorites, game]);
    }
  }

  function removeFavorite(gameId) {
    setFavorites(favorites.filter((g) => g.id !== gameId));
  }

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
