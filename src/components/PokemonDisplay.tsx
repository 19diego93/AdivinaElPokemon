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
  console.log(name);
  return (
    <div className="card">
      <div className="card-header">
        <h1 className="text-center">
          {showAnswer ? name?.toUpperCase() : "¿Quién es este Pokémon?"}
        </h1>
      </div>
      <div className="card-body">
        {loading ? (
          <Spinner />
        ) : (
          image && (
            <img
              src={image}
              alt={name}
              className="img-fluid mx-auto d-block"
              style={{
                maxHeight: "300px",
                filter: showAnswer ? "none" : "brightness(0)",
                transition: "filter 0.3s ease-i-out",
              }}
            />
          )
        )}
      </div>
    </div>
  );
};
export default PokemonDisplay;
