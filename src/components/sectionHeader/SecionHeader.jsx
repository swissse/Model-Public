import ButtonModel from "../ButtonModel/ButtonModel"
import Header from "../header/Header"
import s from './sectionHeader.module.css'
import { useState } from "react"
import BurgerMenu from "../BurgerMenu/BurgerMenu"

const SecionHeader = () => {
  const [open, setOpen] = useState(false);


  return (
    <div className={s.secionHeader}>
      {open ? <BurgerMenu open={open}/> : <Header setOpen={setOpen} />} 

      <img className={s.section__h__img} src="src/assets/main/Rectangle 3.png" alt="img" />
      <div className={s.section__h__text}>
        <p>2011 — 22.</p>
        <div className={s.section__h}>
          <h2>MODEL</h2>
          <h2 className={s.pad}>PUBLIC.</h2>
        </div>
      </div>

      <ButtonModel text='Стать моделью' />

      <p className={s.agency}>Международное модельное агенство</p>
    </div>
  )
}

export default SecionHeader