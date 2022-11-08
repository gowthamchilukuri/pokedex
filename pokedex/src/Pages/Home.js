import React, { useEffect, useState } from 'react'
import PokeCard from '../Components/PokeCard'
import axios from  'axios'
import Header from '../Components/Header'
import InfiniteScroll from "react-infinite-scroll-component";
import { Container, Row, Col, Spinner } from "react-bootstrap";

const Home = () => {

  const [pokemonArr, setPokemonArr] = useState()
  const [pokemonArr2, setPokemonArr2] = useState()
const [searchPokemon, setsearchPokemon] = useState()
const[capturedPokemon, setCapturedPokemon] = useState()
const[capturedPokemonToggle, setCapturedPokemonToggle] = useState(false)


  useEffect(() => {
    handleGetAllPokemon()
  }, [])
  
  const handleGetAllPokemon = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=100').then(res=>{
    console.log('res',res)
    setPokemonArr(res?.data?.results)
    setPokemonArr2(res?.data?.results)
    setCapturedPokemon(res?.data?.results.slice(0,15))
      })
  }

  useEffect(() => {
    if(searchPokemon){
      let data = [...pokemonArr2]
      //console.log("e?.target?.value--------------true")
    const filteredPokemonArr = data?.filter(f=>{return f?.name.includes(searchPokemon)})
   // console.log("filteredPokemonArr",filteredPokemonArr)
    setPokemonArr(filteredPokemonArr)
  }else {
   // console.log("e?.target?.value--------------false")
    setPokemonArr(pokemonArr2)
  }
  }, [searchPokemon]) 
  

  const hanldeSetCapturePokenArr=(toggle) => {
    if(toggle){
   console.log("e?.target?.value--------------true",capturedPokemon)

      setPokemonArr(capturedPokemon)
    }else{
        setPokemonArr(pokemonArr2)
      }
  }
  
  const handleSearchPokemon = (e)=>{
 //   console.log(e.target.value)
 setsearchPokemon(e.target.value)
  }
  const handleGetCapturePokemon = (e)=>{
      console.log(e.target.checked)
    setCapturedPokemonToggle(!e.target.checked)
    hanldeSetCapturePokenArr(e.target.checked)
     }

  return (

    
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
     <Header/>

      <input className='text-box' type={"text"}  onChange = {handleSearchPokemon}/>
      <input  type={'checkbox'}  onChange = {handleGetCapturePokemon}/>
      

        <div style={{padding:100}}>
            <Row>
            {pokemonArr?.map((item,index)=>{
                return (
                  <Col key={item.id} xs={12} sm={6} lg={3}>
                    <PokeCard name = {item?.name} id={index+1}url = {item?.url}/>
                  </Col>
                );
              })}
            </Row>
          </div>
       

        
    

    </div>
  )
}

export default Home