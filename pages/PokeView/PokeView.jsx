import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./pokeview.scss"
import { Button } from 'react-bootstrap'
import { Outlet, useNavigate } from 'react-router-dom'
export const PokeView = ({CurrentPokemon}) => {
  const name = CurrentPokemon.name
  const navigate = useNavigate()
  return (
    <div className="d-flex p-5">
      <div className="vista-pokemon">
        <img
          src={CurrentPokemon.sprites.other[`official-artwork`].front_default}
          alt=""
        />
        <h1>{CurrentPokemon?.name}</h1>
      </div>
      <div className="d-flex flex-column gap-3">
        <div className="botones d-flex gap-5">
          <Button onClick={() => navigate(`/pokedex/${name}/moves`)}>
            Moves
          </Button>
          <Button onClick={() => navigate(`/pokedex/${name}/Stats`)}>
            Stats
          </Button>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
