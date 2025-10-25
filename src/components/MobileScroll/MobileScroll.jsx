import React from 'react'
import s from './index.module.css'
const MobileScroll = ({ images_folder }) => {
  const arr = Array.from({ length: 4 }, (_, i) => i + 1)

  return (
    <div className={s.scroll_bar}>
      {arr.map((num) => (
        <img
          className={s.img}
          key={num}
          src={`/images/catalog/${images_folder}/${num}.png`}
          alt={`${images_folder}/${num}`}
          onError={(e) => (e.currentTarget.style.display = 'none')}
        />
      ))}
    </div>
  )
}

export default MobileScroll