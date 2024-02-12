import Image from "next/image";
import { fetchPokemon } from "../lib/data";

export default async function ListItem({
  name,
}: {
  name: string;
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
