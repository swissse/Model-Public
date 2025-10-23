import s from './header.module.css'

const Header = () => {
  return (
    <div className={s.header}>
      <img src="src/assets/main/logo.png" alt="logo" />
      <nav className={s.nav}>
        <div className={s.nav__burger}></div>
        <div className={s.nav__burger}></div>
        <div className={s.nav__burger}></div>
      </nav>
    </div>
  )
}

export default Header