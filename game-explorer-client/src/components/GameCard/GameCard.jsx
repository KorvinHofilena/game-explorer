import styles from "./GameCard.module.css";

function GameCard({ game, onSave }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{game.name}</h3>
      <img
        src={game.background_image}
        alt={game.name}
        className={styles.image}
      />
      <button onClick={() => onSave(game)}>Save to Favorites</button>
    </div>
  );
}

export default GameCard;
