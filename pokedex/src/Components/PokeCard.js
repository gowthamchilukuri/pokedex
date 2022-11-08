import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const PokeCard = ({name,url,id}) => {
const [pokemonDetails, setpokemonDetails] = useState()
const [ImageUrl, setImageUrl] = useState()
const [types,setTypes] = useState()
useEffect(() => {
  
    handleGetPokemonDetails()
  
    

}, [])

const handleGetPokemonDetails = () => {
    axios.get(url).then(res=>{
   // console.log('handleGetPokemonDetails',name,"+",res)
   
            setImageUrl(res?.data?.sprites?.front_default)
            setpokemonDetails(res?.data)
            setTypes(res?.data?.types)
    })
  }
const localid = id.toString().padStart(3, "0");
  
  return (
  
       
    <div className='container-card mb-4'style={{backgroundColor:'#ccccb3'}}>

        <div style={{display:'flex',flexDirection:'column', alignItems:'center',padding:10}}>
        <Link state= { pokemonDetails} to={name ? `/details/${name}` : "javascript:void"}>
        <img className='card-img' style={{maxWidth:500}}  
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${localid}.png`} alt='poke'/>
        </Link>
        <span>Id:{localid}</span>
        <h4 className='text-uppercase'>{name}</h4>
        <div className="w-100  d-flex justify-content-between">
        {types?.map((item, index) => {
          return (
            <div
              key={index}
              className={` 
                  ${item.type.name}
                  type-item ${types.length == 1 && "w-100"}`}
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