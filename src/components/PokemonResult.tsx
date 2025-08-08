import { GameState } from "../hooks/useGameManager";

interface Props {
  loadNewPokemon: () => void;
  gameState: GameState;
}

const PokemonResult = ({ loadNewPokemon, gameState }: Props) => {
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
      <button
        className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold transition-colors duration-300"
        onClick={loadNewPokemon}
      >
        Volver a jugar
      </button>
    </div>
  );
};

export default PokemonResult;
