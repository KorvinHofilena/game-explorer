import React from "react";

function GameCard({ game, onSave }) {
  return (
    <div className="game-card">
      <h3>{game.name}</h3>
      <img src={game.background_image} alt={game.name} width="250" />
      <br />
      <button onClick={() => onSave(game)}>Save to Favorites</button>
    </div>
  );
}

export default GameCard;
