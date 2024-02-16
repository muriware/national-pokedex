import { fetchNationalPokedex } from '@/app/lib/data';
import InfiniteScroller from '@/app/ui/infinte-scroller';

export default async function Page() {
  const { pokemon_entries } = await fetchNationalPokedex();

  return <InfiniteScroller pokemonEntries={pokemon_entries} />;
}
