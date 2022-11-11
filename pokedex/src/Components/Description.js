import axios from 'axios'
import React, { useEffect, useState } from 'react'
const Description = ({url}) => {
const [description, setDescription] = useState()

    useEffect(() => {
        axios.get(url).then(res=>{
        setDescription(res?.data.effect_entries[0]?.effect)
            })
    }, [url])
    
  return (
    <div>
        <h3>Description</h3>
        <p>{description}</p>
    </div>
  )
}

export default Description