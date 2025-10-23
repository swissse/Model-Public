import React from 'react'
import s from './index.module.css'
const ModelCard = ({name}) => {
  return (
    <div>
         <img src={`src/assets/catalog/${name}/1.png`} alt="" />
         <h3>{name}</h3>
    </div>
  )
}

export default ModelCard