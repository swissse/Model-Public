import React from 'react'
import ModelCard from '../../components/ModelCard/ModelCard'
import { models_data_list } from '../../data'
import Header from '../../components/header/Header'
import s from './index.module.css'
const Catalog = () => {
  return (
    <div>
      {/* <Header isBlack={true}/> */}
      <div className={s.models_list}>
        {models_data_list.map((model) => (
          <ModelCard key={model.id} {...model}/>
        ))}
      </div>
    </div>
  )
}

export default Catalog