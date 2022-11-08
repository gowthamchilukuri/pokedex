import React, { useEffect, useState } from 'react'
import Character from '../Components/Character'
import Evolutions from '../Components/Evolutions'
import Header from '../Components/Header'
import Stats from '../Components/Stats'
import { useLocation, useParams } from 'react-router-dom'
import PokeCard from '../Components/PokeCard'

const PokeDetails = () => {
  let location = useLocation();
  const pokemonDetails= location?.state
  const [PokemonData, setPokemonData] = useState()

  useEffect(() => {
    setPokemonData(pokemonDetails)
    console.log('poke',pokemonDetails )
  }, [])
  
  return (
  <>
    <Header/>
    <div style={{display:'flex',flexDirection:'column',padding:150}}>
      <div style={{display:'flex'}}>
        <div style={{display:'flex',flexDirection:'column',width:'50%'}}>
          {PokemonData && <PokeCard name = {PokemonData?.name} id={PokemonData?.id } url = {PokemonData?.url}/> }
          <Stats/>
        </div>
        <div style={{display:'flex',flexDirection:'column',width:'50%'}}>
          <p>ahsajdbd awfasdfd fsfsaf assfsaf safsarwf sdfsfs aafasdf
            sfsaf sfaf asgfzd fgsafaf df atg gtg
          </p>
          <h3>versions</h3>
          <Character
           height={pokemonDetails?.height}
           weight={pokemonDetails?.weight}/>
        </div>
      </div>
      <div>
        <Evolutions/>
      </div>
    </div>
    </>
  )
}

export default PokeDetails