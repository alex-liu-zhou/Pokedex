import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export const Pokedex = ({generacion}) => {
  const navigate = useNavigate()
  const naviGen= (num1,num2,url)=>{
    generacion(num1,num2)
    navigate(url)
  }
  return (
    <div>
      <h1>Pokedex</h1>
      <button onClick={()=>naviGen(0,151,"/pokedex/1generacion")}>1ºGeneracion</button>
      <button onClick={()=>naviGen(151,100,"/pokedex/2generacion")}>2ºGeneracion</button>
      <Outlet/>
    </div>
  )
}
