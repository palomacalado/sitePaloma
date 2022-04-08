import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import fotoDrifts from "../../Assets/Images/Drift.png"

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProjectCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            J
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Jogo Drifts"
        subheader="2014"
      />
      <CardMedia
        component="img"
        height="194"
        image={fotoDrifts}
        alt="Foto ilustrativa do projeto"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Esta versão Drifts foi desenvolvida por mim, enquanto aluna de Ciência da Computação da Universidade Federal do Rio de Janeiro, como projeto final da disciplina Computação II - Java em 2014.2
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Drifts:</Typography>
          <Typography paragraph>
          Este jogo tem como objetivo acumular o máximo de bolhas vedes na bolha vermelha que é comandada pelo usuário, dentro do tempo estipulado de dois minutos, evitando assim tocar as bolhas roxas que ocasionam o estouro destas e término do jogo. A quantidade mínima de bolhas verdes para serem convertidas em pontos é 3. Para convertê- las basta tocar o grupo de bolas que está sob seu comando na bola azul, que automaticamente as converterá em pontos
          </Typography>
         
        </CardContent>
      </Collapse>
    </Card>
  );
}
