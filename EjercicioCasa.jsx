import React, { useEffect, useState } from 'react'
import { PokeNavbar } from './components/PokeNavbar'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Pokedex } from './pages/Pokedex/Pokedex'
import { PokeView } from './pages/PokeView/PokeView'
import { PokeMoves } from './components/PokeMoves'
import axios from 'axios'
import { PokeHome } from './pages/Home/PokeHome'
import { PokeGeneracion1 } from './components/PokeGeneracion1'
import { PokeGeneracion2 } from './components/PokeGeneracion2'
import { useNavigate } from 'react-router-dom'
import { PokeStats } from './components/PokeStats'

export const EjercicioCasa = () => {
  const [pokedex,setPokedex] = useState([])
  const [rango,setRango] =useState({
    num1:0,
    num2:151,
  })
  const generacion =(n1,n2)=>{
    setRango({num1:n1,num2:n2})
  }
  const [viewPokemon,setViewPokemon] = useState({})
  const selectPokemon = (valor)=>setViewPokemon(valor)
  useEffect(()=>{
    axios
        .get(`https://pokeapi.co/api/v2/pokemon?offset=${rango.num1}&limit=${rango.num2}`)
        .then((res)=>{
          const allPokemon = (res.data.results.map((e)=>axios.get(e.url)))
          Promise.all(allPokemon)
            .then((res2)=>{
              setPokedex(res2)
            })
        })
        .catch((err)=>{
          console.log(err)
        })
  },[rango])
  


  console.log(viewPokemon)
  return (
    <>
    <BrowserRouter>
      <PokeNavbar />
      <Routes>
        <Route path="/" element={<PokeHome/>}/>
        <Route path="/pokedex" element={<Pokedex generacion={generacion}/>} >
           <Route path='1generacion' element={<PokeGeneracion1 pokedex={pokedex} selectPokemon={selectPokemon}/>}/>
           <Route path='2generacion' element={<PokeGeneracion2 pokedex={pokedex} selectPokemon={selectPokemon}/>}/>
        </Route>
        <Route path="/pokedex/:name" element ={<PokeView CurrentPokemon={viewPokemon}/>} >
            <Route path="moves" element ={<PokeMoves CurrentPokemon={viewPokemon}/>}/>
            <Route path="Stats" element ={<PokeStats CurrentPokemon={viewPokemon}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}
