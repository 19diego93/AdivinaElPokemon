import Spinner from "./Spinner";
import type { Pokemon } from "../types/pokemon.interface";
import { GameState } from "../hooks/useGameManager";

interface Props {
  pokemon: Pokemon | null;
  loading: boolean;
  gameState: GameState;
}

const PokemonDisplay = ({ pokemon, loading, gameState }: Props) => {
  const showAnswer = gameState !== GameState.Playing;
  const image = pokemon?.image;
  const name = pokemon?.name;

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
      <h1 className="text-3xl font-bold text-center mb-4">
        {showAnswer ? name?.toUpperCase() : "¿Quién es este Pokémon?"}
      </h1>
      <div className="flex items-center justify-center h-64 bg-gray-700 rounded-lg">
        {loading ? (
          <Spinner />
        ) : (
          image && (
            <img
              src={image}
              alt={name}
              className={`mx-auto transition-all duration-500 ease-in-out ${
                showAnswer ? "filter-none" : "brightness-0"
              }`}
              style={{
                maxHeight: "300px",
              }}
            />
          )
        )}
      </div>
    </div>
  );
};

export default PokemonDisplay;
