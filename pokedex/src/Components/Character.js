import React from 'react'

const Character = ({height,weight}) => {
  console.log(weight)
  return (
    <div>Character
        <div style={{display:'flex',flexWrap:'wrap'}}>
      <div >
        <h4>Height</h4>
        <p>{height}m</p>
      </div>

      <div >
        <h4>Capture rate</h4>
        <p>%</p>
      </div>

      <div >
        <h4>Weight</h4>
        <p>{weight}kg</p>
      </div>

      <div >
        <h4>Abilities</h4>
        <p></p>
      </div>

      <div >
        <h4>Gender</h4>
        <p></p>
      </div>

      <div >
        <h4>Habitat</h4>
        <p></p>
      </div>
    </div>
    </div>
  )
}

export default Character