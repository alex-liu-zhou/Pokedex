import React from 'react'
import "./pokecards.scss"
import { Link } from 'react-router-dom'
export const PokeGeneracion1 = ({pokedex,selectPokemon}) => {
  return (
    <div>
      <h1>Pokedex Primera Generacion</h1>
      <div className="vista-generacion">
        {pokedex?.map((e)=>{
          
          return(
        
            <div className='pokeCard'>
              <div>
              <Link to={`/pokedex/${e.data.name}`} onClick={()=>{selectPokemon(e.data)}}><img src={e.data.sprites.other[`official-artwork`].front_default} alt="" /></Link>
              <h2>{e.data.name}</h2>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
