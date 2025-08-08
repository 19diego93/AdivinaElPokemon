import { GameState } from "../hooks/useGameManager";
import type { Pokemon } from "../types/pokemon.interface";

interface Props {
  pokemon: Pokemon | null;
  loadNewPokemon: () => void;
  gameState: GameState;
}

const PokemonResult = ({ pokemon, loadNewPokemon, gameState }: Props) => {
  if (gameState === GameState.Playing) {
    return null; // No result to show while playing
  }

  const isCorrect = gameState === GameState.Correct;

  return (
    <div
      className={`p-4 rounded-lg text-center transition-all duration-300 ${
        isCorrect ? "bg-green-500" : "bg-red-500"
      }`}
    >
      <h2 className="text-2xl font-bold mb-4">
        {isCorrect ? "¡Correcto!" : "Incorrecto. Inténtalo de nuevo."}
      </h2>
      {isCorrect && pokemon && (
        <div className="text-white mt-4">
          <h3 className="text-xl font-bold">Habilidades:</h3>
          <ul className="flex justify-center gap-4 mt-2">
            {pokemon.abilities.map((ability) => (
              <li key={ability} className="bg-gray-700 rounded-full px-4 py-1">
                {ability}
              </li>
            ))}
          </ul>
        </div>
      )}
      <button
        className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold transition-colors duration-300 mt-4"
        onClick={loadNewPokemon}
      >
        Volver a jugar
      </button>
    </div>
  );
};

export default PokemonResult;
