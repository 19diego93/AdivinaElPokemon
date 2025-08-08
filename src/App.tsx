import GameStats from "./components/GameStats";
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
    wins,
    losses,
    effectiveness,
  } = useGameManager();

  if (error) {
    return (
      <div className="bg-red-500 text-white text-center p-4 rounded-md">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto">
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
          pokemon={pokemon}
          loadNewPokemon={loadNewPokemon}
          gameState={gameState}
        />
        <GameStats wins={wins} losses={losses} effectiveness={effectiveness} />
      </div>
    </div>
  );
};

export default App;
