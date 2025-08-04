import { useState } from "react";
import type { GameState } from "../hooks/useGameManager";

interface Props {
  handlePokemonNameSubmit: (pokemonName: string) => void;
  gameState: GameState;
}

const PokemonForm = ({ handlePokemonNameSubmit, gameState }: Props) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      console.log("Input vacío");
      return;
    }
    handlePokemonNameSubmit(inputValue.trim().toLowerCase());
    setInputValue(""); // Clear input after submission
  };

  return (
    <form className="input-group my-4" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder="¿Quién es ese Pokemón?"
        aria-label="¿Quién es ese Pokemón?"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        autoFocus
        disabled={gameState !== "playing"}
      />
      <button
        className="btn btn-outline-dark"
        type="submit"
        disabled={!inputValue.trim() || gameState !== "playing"}
      >
        Button
      </button>
    </form>
  );
};
export default PokemonForm;
