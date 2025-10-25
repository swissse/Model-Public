import React, { useRef, useState } from 'react'
import s from './index.module.css'
const DesktopScroll = ({ images_folder }) => {
   const arr = Array.from({ length: 10 }, (_, i) => i + 1)

   const scrollRef = useRef(null)
   const [currentIndex, setCurrentIndex]  = useState(0)

   const offsetWidth = 1110 + 30;
   const totalPages = 2

   const shiftRight = () => {
      setCurrentIndex(currentIndex => currentIndex + 1)
   }

   const shiftLeft = () => {      
      setCurrentIndex(currentIndex => currentIndex - 1)
   }
   
   if(scrollRef.current){
      scrollRef.current.style.transform = `translateX(${-((currentIndex + totalPages) % totalPages) * offsetWidth}px)`;
   }

   return (
      <div className={s.desktop_scroll}>
         <button onClick={shiftLeft}><img src="/images/arrow.png" alt="" /></button>
         <div className={s.scroll}>
            <div className={s.scroll_img} ref={scrollRef}>
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
         </div>
         <button className={s.right}><img src="/images/arrow.png" alt="" onClick={shiftRight}/></button>
      </div>
   )
}

export default DesktopScroll