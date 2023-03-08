import Head from "next/head";
import { HomePage } from "@/components/home/home-page";

export async function getServerSideProps() {

  /* descargar pokemons de poke api */
  const traerPokemon = (numero) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${numero}`)
      .then((response) => response.json())
      .then((data) => data);
  };

  /* recorrerlos y guardalos en un array */
  let arrayPokemon = [];
  for (let i = 1; i <= 20; i++) {
    let data = await traerPokemon(i);
    arrayPokemon.push(data);
  }

  /* filtrar los datos que quiero mostrar */

  let data = arrayPokemon.map((pokemon) => {
    return ({
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.sprites.other.dream_world.front_default,
      type: pokemon.types
    })
  })

  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  return (
    
    <>
      <Head>
        <title>Poke Api</title>
      </Head>
      <main>
        <HomePage  data={data} />
      </main>
    </>
  );
}
