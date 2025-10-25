import React from 'react'
import s from './index.module.css'
import { NavLink } from 'react-router'
const ModelCard = ({id, name, images_folder}) => {
  return (
    <NavLink className={s.card} to={`/model/${id}`}>
      <img src={`/images/catalog/${images_folder}/1.png`} alt="" />
      <h3>{name}</h3>
    </NavLink>
  )
}

export default ModelCard