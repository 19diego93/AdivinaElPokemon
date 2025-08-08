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
      <div className="relative flex items-center justify-center h-80 rounded-lg bg-gradient-to-br from-blue-900 to-gray-900 shadow-2xl overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-repeat bg-center opacity-10"
             style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
        {loading ? (
          <Spinner />
        ) : (
          image && (
            <img
              src={image}
              alt={name}
              className={`z-10 mx-auto transition-all duration-500 ease-in-out ${showAnswer ? "filter-none" : "brightness-0"}`}
              style={{
                maxHeight: "250px",
              }}
            />
          )
        )}
      </div>
    </div>
  );
};

export default PokemonDisplay;
