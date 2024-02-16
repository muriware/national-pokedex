import { useState } from 'react';
import Image from 'next/image';
import { Pokemon } from '@/app/lib/types';
import ImageBackdrop from '@/app/ui/image-backdrop';

export default function ListItem({
  pokemon,
  animationDelay,
}: {
  pokemon: Pokemon;
  animationDelay: number,
}) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageSrc = pokemon.sprites.other['official-artwork'].front_default;

  return (
    <li className='size-full p-2.5'>
      <div className='relative aspect-square h-auto w-full'>
        <ImageBackdrop imageLoaded={imageLoaded} animationDelay={animationDelay} />
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={`${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}'s official artwork picture`}
            width={475}
            height={475}
            sizes='100vw'
            onLoad={() => setImageLoaded(true)}
            className='relative drop-shadow-md animate-fade-in -translate-y-[10px] opacity-0'
            style={{ animationDelay: `${animationDelay * 2}ms`, willChange: 'transform, opacity' }}
          />
        )}
      </div>
      <div className='translate-x-[5%] @container md:translate-x-[10%]'>
        <p className='text-[24cqw] text-stone-700 drop-shadow-md md:text-[18cqw]'>
          {String(pokemon.id).padStart(4, '0')}
        </p>
      </div>
    </li>
  );
}
