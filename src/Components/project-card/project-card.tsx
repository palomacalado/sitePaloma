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
import { ListItemIcon, Menu, MenuItem } from '@mui/material';
import Fade from '@material-ui/core/Fade';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteCard from '../../services/delete-card';
import ConfirmDelete from '../modal/confirm-delete';
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
  const [modalDelete, setModalDelete] = React.useState(false);
  const userEmail = localStorage.getItem('email');
  const [anchorEla, setAnchorEla] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEla);
  const handleClickA = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEla(event.currentTarget);
  };
  const handleCloseA = () => {
    setAnchorEla(null);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleCloseAdmin = () => {
    setAnchorEla(null);
  };
  return (
    <>
      <ConfirmDelete
        modalDelete={modalDelete}
        setModalDelete={setModalDelete}
        type={type}
        _id={_id}
      />
      <Card sx={{ width: 245, margin: 1 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: '#fe6e3a' }} aria-label="recipe">
              {title[1]}
            </Avatar>
          }
          action={
            userEmail?.replaceAll(`"`, '') === 'palomacalado@yahoo.com.br' && (
              <>
                <IconButton
                  onClick={handleClickA}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                >
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEla}
                  id="account-menu"
                  open={open}
                  onClose={handleCloseA}
                  onClick={handleCloseA}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  {userEmail?.replaceAll(`"`, '') ===
                    'palomacalado@yahoo.com.br' && (
                    <>
                      <MenuItem
                        onClick={() => {
                          setModalDelete(true);
                          handleCloseAdmin();
                        }}
                      >
                        <ListItemIcon>
                          <DeleteIcon fontSize="small" />
                        </ListItemIcon>
                        Excluir
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          handleCloseA();
                        }}
                      >
                        <ListItemIcon>
                          <EditIcon fontSize="small" />
                        </ListItemIcon>
                        Editar
                      </MenuItem>
                    </>
                  )}
                </Menu>
              </>
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
            <Typography paragraph>
              {description.replaceAll(`"`, '')}{' '}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}
export default ProjectCard;
