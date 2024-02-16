import { forwardRef } from 'react';
import Tombstone from '@/app/ui/tombstone';

type ListProps = {
  gridPosition: number;
  itemsRange: { start: number, end: number };
};

const List = forwardRef<HTMLUListElement, ListProps>(({ gridPosition, itemsRange }, ref) => {
  // const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  // useEffect(() => {
  //   const fetchPromises = pokemonEntries.slice(0, 50).map((pokemon) =>
  //     fetchPokemon(pokemon.pokemon_species.name)
  //   );
  //
  //   Promise.all(fetchPromises)
  //     .then((results) => setPokemonList(results));
  // }, [pokemonEntries]);
  //
  console.log('total:', itemsRange.end - itemsRange.start)

  return (
    <ul
      ref={ref}
      className='absolute grid w-full grid-cols-3 sm:grid-cols-4 md:grid-cols-5 ring-1 ring-red-400'
      style={{ transform: `translate(0, ${gridPosition}px)` }}
    >
      {Array.from({ length: 1000 }).slice(itemsRange.start, itemsRange.end).map((_, index) => {
        return (
          <div key={index} className='relative'>
            <span className='absolute'>{index + 1 + itemsRange.start}</span>
            <Tombstone />
          </div>
        )
      })}
      <Tombstone isHidden />
    </ul>
  );
});

export default List;
