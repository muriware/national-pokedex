import Image from 'next/image';
import { fetchPokemon } from '@/app/lib/data';
import { PokemonEntry } from '@/app/lib/types';

export default async function ListItem({
  pokemonEntry: { entry_number, pokemon_species: { name } }
}: {
  pokemonEntry: PokemonEntry;
}) {
  const { sprites } = await fetchPokemon(name);

  return (
    <div>
      <Image
        src={sprites.other['official-artwork'].front_default}
        alt={`${name}'s official artwork picture`}
        width={475}
        height={475}
      />
      <div>
        {`${name.charAt(0).toUpperCase() + name.slice(1)}`}
      </div>
    </div>
  );
}
