import axios from 'axios'
import React from 'react'
import { useEffect,useState } from 'react'

export const PokeMoves = ({CurrentPokemon}) => {

  const [moves,setMoves]= useState([])
  useEffect(()=>{
    let provision = []
    {CurrentPokemon?.moves?.map((e)=>provision.push(e))}
    
    const allMoves = (provision.map((e)=>axios.get(e.move.url)))
    Promise.all(allMoves)
      .then((res)=>{
        setMoves(res)
      })
  },[])

  return (
    <div className="vista-caracteristicas">
    <table>
      <tr>
        <th>Move Name</th>
        <th>Description</th>
      </tr>
      {moves?.map((e,idx)=>{
        return(
      <tr>
        <th className='titulo'>
          <p lassName='text-center'>{e?.data?.name}</p>
          <div className={`tipo ${e?.data?.type?.name}`}>{e?.data?.type?.name}</div>
        </th>
        <td>{e?.data?.effect_entries[0]?.effect}</td>
      </tr>
        )
      })}
    </table>
</div>
  )
}
