// src/contexts/FavoritesContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("favoriteGames");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          const validGames = parsed.filter(
            (g) => g && g.id && g.name && g.background_image
          );
          setFavorites(validGames);
        }
      }
    } catch (err) {
      console.error("Failed to load favorites from localStorage:", err);
    } finally {
      setIsLoaded(true); // ✅ Allow children to render
    }
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("favoriteGames", JSON.stringify(favorites));
    }
  }, [favorites, isLoaded]);

  const addFavorite = (game) => {
    if (!favorites.some((g) => g.id === game.id)) {
      setFavorites((prev) => [...prev, game]);
    }
  };

  const removeFavorite = (gameId) => {
    setFavorites((prev) => prev.filter((g) => g.id !== gameId));
  };

  // ✅ Delay rendering children until state is initialized
  if (!isLoaded) return null;

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
