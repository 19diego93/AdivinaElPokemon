const POKEMON_API_URL = "https://pokeapi.co/api/v2/pokemon";
const MAX_POKEMON_COUNT = 151;
import type { Pokemon } from "../types/pokemon.interface";

const fakePromise = <T>(data: T, delay: number = 1000): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
};

const getRandomPokemon = async (): Promise<Pokemon> => {
  const randomId = Math.floor(Math.random() * MAX_POKEMON_COUNT) + 1;
  const response = await fetch(`${POKEMON_API_URL}/${randomId}`);

  await fakePromise(null, 2000); // Simulate network delay

  if (!response.ok) {
    throw new Error("Failed to fetch Pokémon data");
  }

  const data = await response.json();

  return {
    id: data.id,
    name: data.name,
    image: data.sprites.other["official-artwork"].front_default,
  };
};

const normalizePokemonName = (name: string): string => {
  return name
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, " ")
    .replace(/[^a-z0-9 ]/g, "");
};

const isPokemonNameValid = (
  pokemonNmae: string,
  inputName: string
): boolean => {
  return normalizePokemonName(pokemonNmae) === normalizePokemonName(inputName);
};

export const pokemonService = {
  getRandomPokemon,
  isPokemonNameValid,
};
