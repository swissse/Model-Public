import { useNavigate } from 'react-router'
import s from './header.module.css'

const Header = ({ isBlack, setOpen }) => {
  const navigate = useNavigate()
  return (
    <>
      <div className={s.header}>
        <button onClick={() => navigate(-1)} className={s.back_button}>
          {!isBlack
            ? <img src="/images/logo.png" alt="logo" />
            : <img src='/images/blackLogo.png' alt="logo" />}
        </button>
        <nav onClick={() => setOpen(true)} className={s.nav}>
          <div className={s.nav__burger}></div>
          <div className={s.nav__burger}></div>
          <div className={s.nav__burger}></div>
        </nav>
      </div>
      {isBlack && <hr className={s.strip} />}

    </>
  )
}

export default Header