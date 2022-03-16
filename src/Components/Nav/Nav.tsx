import styles from './Nav.module.css';

import logo from "../../Assets/Images/P A L O M A.png"
function Nav() {
  return (
    <div className={styles.nav}>
        <a href="/">
          <img src={logo} alt="logo de Paloma" />
        </a>

        <div className={styles.menu}>
          <a href="#sobre mim">Sobre mim</a>
          <a href="/projetos">Projetos</a>
          <a href="https://docs.google.com/document/d/1UTZL6MpGxkuoh8Z52xEc4wsaGBK9os8VFq17mBrxrNw/edit?usp=sharing" target= "_blank">Currículo vitae</a>

        </div>
      </div>
  )
}

export default Nav