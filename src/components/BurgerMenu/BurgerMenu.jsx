import s from './BurgerMenu.module.css';

const BurgerMenu = ({ open }) => {

  return (
    <div className={`${s.burgerMenu} ${open ? s.open : ''}`}>
      <div className={s.nav}>
        <img src="src/assets/main/logo.png" alt="" />

        <div className={s.burgerLines}>
          <div className={s.first}></div>
          <div className={s.second}></div>
        </div>

        
      </div>

      <div className={s.line}></div>
    </div>
  );
}

export default BurgerMenu;