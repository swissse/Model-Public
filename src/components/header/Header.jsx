import s from './header.module.css'

const Header = ({ setOpen }) => {
  return (
    <div className={s.header}>
      <img src="src/assets/main/logo.png" alt="logo" />
      <nav onClick={() => setOpen(true)} className={s.nav}>
        <div className={s.nav__burger}></div>
        <div className={s.nav__burger}></div>
        <div className={s.nav__burger}></div>
      </nav>
    </div>
  )
}

export default Header