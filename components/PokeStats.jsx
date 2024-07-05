import React from 'react'

export const PokeStats = ({CurrentPokemon}) => {
  console.log(CurrentPokemon)
  return (
    <div>
      {CurrentPokemon.stats.map((e)=>{
        return(
          <p>{e.base_stat}={e.stat.name} </p>
        )
      })}

    </div>
  )
}
