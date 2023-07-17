import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Menu, MenuItem } from '@mui/material';
import Fade from '@material-ui/core/Fade';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteCard from '../../services/delete-card';
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function ProjectCard({ title, image, description, preview, type, _id }: Card) {
  const [expanded, setExpanded] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const userEmail = localStorage.getItem('email');

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleanchorEl = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseAdmin = () => {
    setAnchorEl(null);
  };
  return (
    <Card sx={{ width: 245, margin: 1 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: '#fe6e3a' }} aria-label="recipe">
            {title[1]}
          </Avatar>
        }
        action={
          userEmail?.replaceAll(`"`, '') === 'palomacalado@yahoo.com.br' && (
            <IconButton aria-label="settings" onClick={handleanchorEl}>
              <MoreVertIcon />
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                TransitionComponent={Fade}
                open={Boolean(anchorEl)}
                onClose={handleCloseAdmin}
              >
                <MenuItem
                  onClick={() => {
                    DeleteCard({ _id, type });
                    handleCloseAdmin();
                  }}
                >
                  <DeleteIcon />
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleCloseAdmin();
                  }}
                >
                  <EditIcon />
                </MenuItem>
              </Menu>
            </IconButton>
          )
        }
        title={title.replaceAll(`"`, '')}
      />
      <CardMedia
        component="img"
        height="300"
        image={image.replaceAll(`"`, '')}
        alt="Foto ilustrativa do projeto"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {preview.replaceAll(`"`, '')}
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
          <Typography paragraph>{description.replaceAll(`"`, '')} </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
export default ProjectCard;
