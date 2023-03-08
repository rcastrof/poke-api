import React from 'react'
import Link from 'next/link'


export async function getServerSideProps({params}){
 
  /* descargar pokemons de poke api */
  const traerPokemon = (numero) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
      .then((response) => response.json())
      .then((data) => data);
  };

  /* recorrerlos y guardalos en un array */
  let arrayPokemon = [];
  for (let i = 1; i <= 1; i++) {
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

const PokemonPage = ({data}) => {
  return (
    <div>
        {data.map((e) => (
          <Link key={e.id} href={`/${e.id}`} legacyBehavior passHref>
            <a>
              <h2>PokeDex: {e.id}</h2>
              <h3>Nombre: {e.name}</h3>
              <h3>
                Tipo:
                {e.type.map((e) => (
                  <p key={e.type.name}>{e.type.name}</p>
                ))}
              </h3>

              <img width={300} height={300} alt={e.name} src={e.image}></img>
            </a>
          </Link>
        ))}
        
    </div>
  )
}

export default PokemonPage