import React from "react";
import styles from "./Welcome.module.css"
import foto from "../../Assets/Images/imagemprincipal.png";

function Welcome() {
  return (
    <div className={styles.welcome}>
      <div className={styles.textoPrincipal}>
        <h1> Olá, eu sou Paloma Calado!</h1>
        <p>
          Praparado para conhecer meu trabalho?! <br />
          Você irá se surpreender!
        </p>
        <button>Veja aqui</button>
      </div>
      {/*  */}
      <div className={styles.imagemPrincipal}>
        <img src={foto} alt="foto de Paloma Calado" />
      </div>
    </div>
  );
}

export default Welcome;
