import { fetchNationalPokedex } from '@/app/lib/data';
import List from '@/app/ui/list';

export default async function Page() {
  const { pokemon_entries } = await fetchNationalPokedex();

  return (
    <main className='min-h-screen'>
      <List pokemonEntries={pokemon_entries} />
    </main>
  );
}
