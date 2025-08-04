import { useState, useEffect, useCallback } from "react";
import { pokemonService } from "../service/pokemon.service";
import type { Pokemon } from "../types/pokemon.interface";

// export enum GameState {
//   Playing = "playing",
//   Correct = "correct",
//   Wrong = "wrong",
// }
export const GameState = {
  Playing: "playing",
  Correct: "correct",
  Wrong: "wrong",
} as const;
export type GameState = (typeof GameState)[keyof typeof GameState];

export const useGameManager = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [gameState, setGameState] = useState<GameState>(GameState.Playing);

  const handlePokemonNameSubmit = useCallback(
    (userInput: string) => {
      if (!pokemon) return;
      const isValid = pokemonService.isPokemonNameValid(
        pokemon.name,
        userInput
      );
      setGameState(isValid ? GameState.Correct : GameState.Wrong);
    },
    [pokemon]
  );

  const loadNewPokemon = useCallback(async () => {
    setLoading(true);
    setError(null);
    setGameState(GameState.Playing);
    try {
      const randomPokemon = await pokemonService.getRandomPokemon();
      setPokemon(randomPokemon);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    loadNewPokemon();
  }, [loadNewPokemon]);

  return {
    pokemon,
    loading,
    error,
    loadNewPokemon,
    handlePokemonNameSubmit,
    gameState,
  };
};
