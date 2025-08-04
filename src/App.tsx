import PokemonDisplay from "./components/PokemonDisplay";
import PokemonForm from "./components/PokemonForm";
import PokemonResult from "./components/PokemonResult";
import { useGameManager } from "./hooks/useGameManager";
const App = () => {
  const {
    loadNewPokemon,
    pokemon,
    error,
    loading,
    gameState,
    handlePokemonNameSubmit,
  } = useGameManager();

  if (error) {
    return <div className="alert alert-danger text-center">{error}</div>;
  }

  return (
    <div className="container mx-auto my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6 ">
          <PokemonDisplay
            pokemon={pokemon}
            loading={loading}
            gameState={gameState}
          />
          <PokemonForm
            handlePokemonNameSubmit={handlePokemonNameSubmit}
            gameState={gameState}
          />
          <PokemonResult
            loadNewPokemon={loadNewPokemon}
            gameState={gameState}
          />
        </div>
      </div>
    </div>
  );
};
export default App;
