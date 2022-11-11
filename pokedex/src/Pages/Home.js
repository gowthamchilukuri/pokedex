import React, { useEffect, useState } from 'react'
import PokeCard from '../Components/PokeCard'
import axios from  'axios'
import Header from '../Components/Header'

const Home = () => {

  const [pokemonArr, setPokemonArr] = useState()
  const [pokemonArr2, setPokemonArr2] = useState()
  const [searchPokemon, setsearchPokemon] = useState()
  const[capturedPokemon, setCapturedPokemon] = useState([])

useEffect(() => {
  setCapturedPokemon(capturedPokemon)
}, [capturedPokemon])


  useEffect(() => {
    handleGetAllPokemon()
  }, [])
  
  const handleGetAllPokemon = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=100').then(res=>{
    const newArr = []
   res?.data?.results?.map((i,index)=>{
    
      let newPokemon = {
        'name' : i?.name,
        'url': i?.url,
        'index':index+1
      }
      newArr.push(newPokemon)
    })
    
    setPokemonArr(newArr)
    setPokemonArr2(newArr)

      })
  }

  useEffect(() => {
    if(searchPokemon){
      let data = [...pokemonArr2]
    const filteredPokemonArr = data?.filter(f=>{return f?.name.includes(searchPokemon)})
    setPokemonArr(filteredPokemonArr)
  }else {
    setPokemonArr(pokemonArr2)
  }
  }, [searchPokemon]) 
  

  const hanldeSetCapturePokenArr=(method) => {
    if(method  === 'captured'){

      setPokemonArr(capturedPokemon)
    }else if(method === 'uncaptured'){
      let uncapturedPokemon = []
      pokemonArr2.map((p,index)=>{
       let findcapPokemon  =capturedPokemon.find(f=>{return(f.index=== p.index)})
       if(!findcapPokemon){
        uncapturedPokemon.push(p)
       }
      })
      setPokemonArr(uncapturedPokemon)
    }

    
    else{
        setPokemonArr(pokemonArr2)
      }
  }
  
  const handleSearchPokemon = (e)=>{
 setsearchPokemon(e.target.value)
  }
  return (

    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center' ,fontFamily: 'Josefin Sans'}}>
     <Header/>
    <input className='text-box col-7 ' style={{borderRadius:10}} type={"text"} onChange={handleSearchPokemon} placeholder={'Search Pokemon'}/>
    <div className="btn-group btn-group-sm p-4">
        <button type="button"  onClick={()=>{hanldeSetCapturePokenArr('captured')}}  className="btn btn-secondary">captured</button>
        <button type="button"  onClick={()=>{hanldeSetCapturePokenArr('uncaptured')}} className="btn btn-secondary">Uncaptured</button>
        <button type="button"  onClick={()=>{hanldeSetCapturePokenArr('All')}}  className="btn btn-secondary">All Pokemon</button>
    </div>

      <div style={{display:'flex',flexWrap:'wrap',gap:25,justifyContent:'center', padding:80}}>
          {pokemonArr?.map((item,index)=>{
          return (
            <PokeCard key={index} pokemon = {item} setCapturedPokemon = {setCapturedPokemon}  capturedPokemon = {capturedPokemon}/>
              );
          })}
     </div>
    </div>
  )
}

export default Home