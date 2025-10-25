import ButtonModel from "../ButtonModel/ButtonModel"
import HorizontalLine from "../HorizontalLine/HorizontalLine"
import s from "./NewFaces.module.css"
import ButtonInstagram from "../ButtonInstagram/ButtonInstagram"

const NewFaces = (params) => {
  return (
    <div className={s.NewFaces}>
      <HorizontalLine />

      <div className={s.NewFaces__container}>
        <div className={s.NewFaces__img}>
          <img className={s.card__img__bigest} src="src/assets/main/NewFaces/Rectangle 2050.png" alt="img" />
          <img className={s.card__img} src="src/assets/main/NewFaces/Rectangle 2051.png" alt="img" />
          <img className={s.card__img} src="src/assets/main/NewFaces/Rectangle 2101.png" alt="img" />
        </div>
        <h3 className={s.card__name}>Marianna Korzhimanova</h3>
        <p className={s.card__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        <div className={s.btn__container}>
          <ButtonInstagram />
          <ButtonModel text='Профиль модели' darkText={true}/>
        </div>
      </div>


    </div>
  )
}

export default NewFaces