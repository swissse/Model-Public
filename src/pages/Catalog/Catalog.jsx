import React from 'react'
import ModelCard from '../../components/ModelCard/ModelCard'
import { models_data_list } from '../../data'

const Catalog = () => {
  return (
    <div>
      {models_data_list.map((model) => (
         <ModelCard {...model}/>
      ))}
    </div>
  )
}

export default Catalog