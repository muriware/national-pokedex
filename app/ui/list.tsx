import { PokemonEntries } from '@/app/lib/types';
import ListItem from '@/app/ui/list-item';

export default function List({
  pokemonEntries,
}: {
  pokemonEntries: PokemonEntries;
}) {
  const filteredList = pokemonEntries.slice(0, 20);

  return (
    <div>
      {filteredList.map((pokemonEntry) => (
        <ListItem key={pokemonEntry.entry_number} pokemonEntry={pokemonEntry} />
      ))}
    </div>
  );
}
