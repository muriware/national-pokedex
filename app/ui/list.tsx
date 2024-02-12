import { PokemonEntries } from "../lib/types";
import ListItem from "./list-item";

export default function List({
  pokemonEntries,
}: {
  pokemonEntries: PokemonEntries;
}) {
  const filteredList = pokemonEntries.slice(0, 20);

  return (
    <div>
      {filteredList.map(({ entry_number, pokemon_species }) => (
        <ListItem key={entry_number} name={pokemon_species.name} />
      ))}
    </div>
  );
}
