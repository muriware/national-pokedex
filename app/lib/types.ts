type PokemonEntry = {
  entry_number: number;
  pokemon_species: {
    name: string;
  };
};

export type PokemonEntries = PokemonEntry[];

export type NationalPokedex = {
  pokemon_entries: PokemonEntries;
};

type PokemonSprites = {
  other: {
    'official-artwork': {
      front_default: string;
    };
  };
};

export type Pokemon = {
  sprites: PokemonSprites;
};
