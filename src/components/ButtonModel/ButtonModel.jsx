import s from './ButtonModel.module.css'

const ButtonModel = ({text, darkText}) => {
  return (
    <div className={s.btn__container__center}>
      <button className={s.btn}>
        <p className={ darkText ? `${s.dark}` : ''}>{text}</p>
      </button>
    </div>
  )
}

export default ButtonModel