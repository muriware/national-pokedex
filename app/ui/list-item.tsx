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
    <div className='w-full max-w-[165px] overflow-hidden'>
      <div className='relative'>
        <div className='absolute h-full w-full origin-bottom scale-90 rounded-full bg-stone-400 drop-shadow-md' />
        <Image
          className='relative z-10 drop-shadow-md'
          src={sprites.other['official-artwork'].front_default}
          alt={`${name.charAt(0).toUpperCase() + name.slice(1)}'s official artwork picture`}
          sizes='100vw'
          width={475}
          height={475}
        />
      </div>
      <div className='translate-x-[5%] @container md:translate-x-[10%]'>
        <p className='text-[24cqw] text-stone-700 drop-shadow-md md:text-[18cqw]'>
          {String(entry_number).padStart(4, '0')}
        </p>
      </div>
    </div>
  );
}
