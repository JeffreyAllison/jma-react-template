const POKEDEX_URL = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
const POKETYPES_URL = `${POKEDEX_URL}/types`;

export async function getPokedex(searchParams, page) {
  return await get(`${POKEDEX_URL}?${searchParams.toString()}&page=${page}`);
}

export async function getTypes() {
  return await get(POKETYPES_URL);
}

async function get(url) {
  const res = await fetch(url);
  const body = await res.json();

  return {
    data: res.ok ? body : null,
    error: res.ok ? null : body,
  };
}
