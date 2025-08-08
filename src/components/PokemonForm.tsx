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
    <form className="flex items-center gap-4 mb-6" onSubmit={handleSubmit}>
      <input
        type="text"
        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
        placeholder="¿Quién es ese Pokémon?"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        autoFocus
        disabled={gameState !== "playing"}
      />
      <button
        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        type="submit"
        disabled={!inputValue.trim() || gameState !== "playing"}
      >
        Adivinar
      </button>
    </form>
  );
};

export default PokemonForm;
