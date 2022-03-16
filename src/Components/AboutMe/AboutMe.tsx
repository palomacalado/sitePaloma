import styles from "./AboutMe.module.css";
import about from "../../Assets/Images/sobremim .png";
import { Timeline } from "antd";

function AboutMe() {

  return (
    <div className={styles.aboutMe}>
        <div><img src={about} alt="colagem de fotos de Paloma Calado" /></div>
        <div className={styles.description}>

      <h3>A vida é curta demais para fazer uma coisa só!</h3>

      <p>
        {" "}
        Sou Paloma Calado, 27 anos, moradora do Compelexo da Maré, <br />
        conjunto de Favelas do Rio de Janeiro. Se você chegou até aqui é<br />
        porque está interessada em me conhecer meu trabalho, mas vamos por <br />        partes!
      </p>
      <p>
          Por muito tempo me senti culpada por não me interessar por um assunto <br />
          somente então, recentemente descobri que sou nada mais, nada menos <br />
          que <b>M U L T I P O T E N C I A L</b>. A partir dessa descoberta abracei minha<br />
          diversidade e aceitei que a menina programadora também ama costurar e crochetar!
          
    <h4>É sobre isso, e tá tudo bem!</h4>
      </p>

    Por aqui você encontrará meu trabalho como desenvolvedora e Criadora de conteúdo! <br />
    Para conhecer cada um com mais detalhes você pode clicar <a href="/projetos"> <b>aqui</b> </a>  ou selecionar a aba Projetos
      <p>

      </p>
      
        </div>
    </div>
  );
}

export default AboutMe;
