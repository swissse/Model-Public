import React from 'react'
import s from './index.module.css'
import { useLocation, useParams } from 'react-router';
import { models_data_list } from '../../data';
import MobileScroll from '../../components/MobileScroll/MobileScroll';
import DesktopScroll from '../../components/DesktopScroll/DesktopScroll';

const ModelPage = () => {
  const { id } = useParams()
  console.log(id);

  const model_data = models_data_list.find(model => model.id === parseInt(id))


  if (!model_data) {
    return <div>Данные не найдены</div>///404
  }

  const {
    name,
    height,
    parameters,
    foot_size,
    hair_color,
    images_folder
  } = model_data || {}


  return (
    <div>
      <div className={s.heading}>
        <h1 className={s.title}>{name?.toUpperCase()}</h1>

        <div className={s.params}>
          <div>
            <p>Рост: </p>
            {height}
          </div>
          <div>
            <p>Параметры: </p>
            {parameters}
          </div>
          <div>
            <p>Размер ноги: </p>
            {foot_size}
          </div>
          <div>
            <p>Цвет волос: </p>
            {hair_color}
          </div>
        </div>


        <a href="#" className={s.inst}>
          <img
            src='/images/social/instagram.png'
            alt="inst"
          />
        </a>

      </div>
        
      <hr className={s.strip}/>

      <MobileScroll images_folder={images_folder}/>
      <DesktopScroll images_folder={images_folder}/>
    </div>
  )
}

export default ModelPage