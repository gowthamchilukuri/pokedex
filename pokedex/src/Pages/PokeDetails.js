import React, { useEffect, useState } from 'react'
import Character from '../Components/Character'
import Header from '../Components/Header'
import { useLocation } from 'react-router-dom'
import Description from '../Components/Description'
import Types from '../Types'

const PokeDetails = () => {
  let location = useLocation();
  const pokemonDetails= location?.state
  const [PokemonData, setPokemonData] = useState()
  const [abilities, setAbilities]= useState(0)
  useEffect(() => {
    setPokemonData(pokemonDetails)
  }, [])
const localid = pokemonDetails.id.toString().padStart(3, "0");
  
  return (
  <>
    <Header/>
    <div style={{width:'100%',textAlign:'center',margin:'0',fontFamily: 'Josefin Sans'}}>
    <h1 className='text-uppercase'>{PokemonData?.name}</h1>
    </div>
    
    <div style={{display:'flex',flexDirection:'column',padding:150,paddingTop:50,margin:0}}>
      <div style={{display:'flex', flexWrap:'wrap'}}>
        <div style={{display:'flex',flexDirection:'column',width:'50%',paddingRight:20}}>
        <img className='card-img' style={{maxWidth:"100%",backgroundColor:"#99ff99", borderRadius:20}}
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${localid}.png`} alt='poke'/>
        </div>
        <div style={{display:'flex',justifyContent:'center',flexDirection:'column',width:'50%',padding:20,marginTop:0,backgroundColor:'#c2c2a3',borderRadius:20}}>
          <Description
          url={pokemonDetails?.abilities[`${abilities}`]?.ability?.url}/>
          <div>
          <h3>Versions</h3>
          <img title='V1' alt="V1" onClick={()=>{setAbilities(0)}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/512px-Pok%C3%A9_Ball_icon.svg.png'
          style={{width:30,marginLeft:20,cursor:'pointer'}}/>
          <img title='V2'alt="V2" onClick={()=>{setAbilities(1)}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Pok%C3%A9_Ball.svg/771px-Pok%C3%A9_Ball.svg.png'
          style={{width:25,marginLeft:20,cursor:'pointer'}}/>
          </div>
          <Character
           height={pokemonDetails?.height}
           weight={pokemonDetails?.weight}
           />
          <div>
          <Types
          pokemonDetails={pokemonDetails}/>
        </div>
        </div>
      
      </div>
    
    </div>
    </>
  )
}

export default PokeDetails