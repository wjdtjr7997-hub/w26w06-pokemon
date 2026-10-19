export const pokemons = [
  { id: 1, name: "이상해씨" },
  { id: 4, name: "파이리" },
  { id: 7, name: "꼬부기" },
  { id: 25, name: "피카츄" },
  { id: 29, name: "니드런♀" },
  { id: 32, name: "니드런♂" },
  { id: 133, name: "이브이" },
  { id: 150, name: "뮤츠" },
  { id: 151, name: "뮤" },
  { id: 152, name: "치코리타" },
].map((pokemon) => ({
  ...pokemon,
  image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
}));
