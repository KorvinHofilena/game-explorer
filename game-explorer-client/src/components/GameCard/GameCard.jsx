import React from "react";
import styles from "./GameCard.module.css";

function GameCard({ game, onSave, onRemove }) {
  return (
    <div className={styles.card}>
      <img
        src={game.background_image}
        alt={game.name}
        className={styles.image}
      />
      <h3 className={styles.title}>{game.name}</h3>

      {onSave && (
        <button className={styles.button} onClick={() => onSave(game)}>
          Save to Favorites
        </button>
      )}

      {onRemove && (
        <button className={styles.removeButton} onClick={onRemove}>
          Remove
        </button>
      )}
    </div>
  );
}

export default GameCard;
