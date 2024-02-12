import { NationalPokedex, Pokemon } from '@/app/lib/types';

const POKE_API = 'https://pokeapi.co/api/v2';

export async function fetchNationalPokedex() {
  try {
    const response = await fetch(`${POKE_API}/pokedex/national`);

    if (!response.ok) {
      throw new Error('Unable to fetch National Pokédex.');
    }

    return response.json() as Promise<NationalPokedex>;
  } catch (error) {
    console.error('Fetch Error:', error);
    throw new Error('Failed to fetch National Pokédex.');
  }
}

export async function fetchPokemon(
  name: string,
) {
  try {
    const response = await fetch(`${POKE_API}/pokemon/${name}`);

    if (!response.ok) {
      throw new Error('Unable to fetch pokemon data.');
    }

    return response.json() as Promise<Pokemon>;
  } catch (error) {
    console.error('Fetch Error:', error);
    throw new Error('Failed to fetch pokemon data.');
  }
}
