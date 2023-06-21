import foto from "../../Assets/images/Websites.png";
import { Title, Image } from './styles';
import Grid from "@material-ui/core/Grid";
function Welcome() {
  return (
    <Grid container
      direction="row"
      alignItems="center"
      justifyContent="center"
      spacing={3}>

      <Image src={foto} alt="foto de Paloma Calado" />
      <Title>

        <h1> Paloma Calado</h1>
        <p>
          Desenvolvedora Web e Criadora de conteúdo
        </p>
      </Title>


    </Grid>
  );
}

export default Welcome;
