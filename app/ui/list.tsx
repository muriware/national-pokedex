import { PokemonEntries } from '@/app/lib/types';
import ListItem from '@/app/ui/list-item';
import { ListItemTombstone } from './tombstones';

export default function List({
  pokemonEntries,
}: {
  pokemonEntries: PokemonEntries;
}) {
  const filteredList = pokemonEntries.slice(0, 20);

  return (
    <ul className='grid grid-cols-3 gap-5 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7'>
      {filteredList.map((pokemonEntry) => (
        <ListItem key={pokemonEntry.entry_number} pokemonEntry={pokemonEntry} />
      ))}
      <ListItemTombstone />
    </ul>
  );
}
