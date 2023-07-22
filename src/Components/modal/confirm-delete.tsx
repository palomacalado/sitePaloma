import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from '@mui/material';
import React from 'react';
import { TransitionProps } from '@mui/material/transitions';
import DeleteCard from '../../services/delete-card';

function ConfirmDelete({ modalDelete, setModalDelete, _id, type }: any) {
  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const handleClose = () => {
    setModalDelete(false);
  };
  const handleDelete = () => {
    DeleteCard({ type, _id });
    setModalDelete(false);
  };

  return (
    <div>
      <Dialog
        open={modalDelete}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{'Deseja mesmo excluir?'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Certeza que quer excluir esse projeto? Essa ação é irreversível.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleDelete}>Confirmar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ConfirmDelete;
