import React from 'react'

const Types = ({pokemonDetails}) => {
  return (
    <div style={{}}>
        <h3>Type</h3>
    <div style={{display:'flex',justifyContent:'space-evenly' }}>
     
        {pokemonDetails?.types?.map((item, index) => {
          return (
            <div className='py-1' style={{width:100,textAlign:'center',color:'white',letterSpacing:1,backgroundColor:item?.type.name==='grass'?'green':'red',borderRadius:10}} key={index}>
            <p className="mb-0 text-uppercase ">{item?.type?.name}</p>
            </div>
          );
        })}
    </div>
    </div>
  )
}

export default Types