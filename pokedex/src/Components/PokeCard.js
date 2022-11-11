import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const PokeCard = ({pokemon,setCapturedPokemon,capturedPokemon}) => {
const [pokemonDetails, setpokemonDetails] = useState()
const [types,setTypes] = useState()
const [captured,setCaptured]=useState(true)

useEffect(() => {
    handleGetPokemonDetails()
}, [pokemon.url])

const handleGetPokemonDetails = () => {
    axios.get(pokemon?.url).then(res=>{
            setpokemonDetails(res?.data)
            setTypes(res?.data?.types)
    })
  }
const localid = pokemon.index.toString().padStart(3, "0");
  const handleSetCaptured = (method)=>{
    const capPokemon = [...capturedPokemon]
    const findPokemon = capPokemon.find(p=>{return(p.index === pokemon.index)})
    setCaptured(prevCaptured => !prevCaptured)
    if(method === 'add'){
      capPokemon.push(pokemon)
setCapturedPokemon(capPokemon)
}else {
  const deleteCapturedPokemon =  capPokemon.filter(p=>{return(p.index !== pokemon?.index)})
setCapturedPokemon(deleteCapturedPokemon)
setCaptured(prevCaptured => !prevCaptured)
}

  }
  return (
  
       
    <div className='container-card 'style={{backgroundColor:'#99ff99' ,borderRadius:10}}>

        <div style={{display:'flex',flexDirection:'column', alignItems:'center',padding:10}}>
        <Link state= { pokemonDetails} to={pokemon?.name ? `/details/${pokemon?.name}` : "javascript:void"}>
        <img className='card-img' style={{maxWidth:500}}
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${localid}.png`} alt='poke'/>
        </Link>
        <div className="w-100  d-flex justify-content-between">
        <span>Id:{localid}</span>
        <div className="btn-group btn-group-sm">
        { capturedPokemon.find(f=>{return(f.index===pokemon.index)}) ?  
        <button type="button" style={{backgroundColor:" #ffff4d"}} onClick={()=>{handleSetCaptured('delete')}}  className="btn ">Uncapture</button>
        
        :<button type="button" style={{backgroundColor:" #8c8cd9"}} onClick={()=>{handleSetCaptured('add')}}  className="btn ">capture</button>
}
  </div>
        </div>
        <h4 className='text-uppercase'>{pokemon?.name}</h4>
        <div className="w-100  d-flex " style={{justifyContent:'space-between'}}>
        {types?.map((item, index) => {
          return (
            <div className='px-2'style={{backgroundColor:item?.type.name===('flying'||'grass')?'#00ff55':'#ffff4d',borderRadius:10}}
              key={index}
            >
              <p className="mb-0 text-uppercase">{item?.type?.name}</p>
            </div>
          );
        })}
      </div>
        </div>
    </div>
  )
}

export default PokeCard