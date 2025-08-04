import { GameState } from "../hooks/useGameManager";

interface Props {
  loadNewPokemon: () => void;
  gameState: GameState;
}

const PokemonResult = ({ loadNewPokemon, gameState }: Props) => {
  if (gameState === GameState.Playing) {
    return null; // No result to show while playing
  }

  return (
    <div
      className={`alert alert-${
        gameState === GameState.Correct ? "success" : "danger"
      } text-center`}
    >
      {gameState === GameState.Correct ? (
        <h2>
          "¡Correcto!" <i className="bi bi-patch-check"></i>
        </h2>
      ) : (
        <h2>
          "Incorrecto. Inténtalo de nuevo."{" "}
          <i className="bi bi-patch-exclamation-fill"></i>
        </h2>
      )}
      <button className="btn btn-dark mt-3" onClick={loadNewPokemon}>
        Volver a jugar
      </button>
    </div>
  );
};
export default PokemonResult;
