import { fetchNationalPokedex } from '@/app/lib/data';
import List from '@/app/ui/list';

export default async function Page() {
  const { pokemon_entries } = await fetchNationalPokedex();

  return (
    <main className='flex min-h-screen flex-col items-center bg-stone-300'>
      <div className='w-full max-w-6xl px-5'>
        <List pokemonEntries={pokemon_entries} />
      </div>
    </main >
  );
}
