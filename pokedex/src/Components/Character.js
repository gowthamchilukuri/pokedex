import React from 'react'

const Character = ({height,weight}) => {
  return (
    <div  >
      <h3>Physical Characters</h3>
        <div style={{display:'flex',padding:10,justifyContent:'center',gap:10,alignContent:'center'}}>
      <div className="card w-50 bg-secondary justify-content-center align-items-center">
        <h6>Height</h6>
        <p>{height}.m</p>
      </div>
      <div className="card w-50 bg-secondary justify-content-center align-items-center">
        <h6>Weight</h6>
        <p>{weight}.kg</p>
      </div>
    </div>
    </div>
  )
}

export default Character