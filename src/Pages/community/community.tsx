import { Button } from '@material-ui/core';
import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/auth';

function Community() {

const {logout}:any = useContext(AuthContext);

const handleLogout =()=>{
    logout();
}
  return (
    <div>community
         <Button
          variant="contained"
          size="large"
          color="secondary"
          onClick={handleLogout}
        >
          Sair
        </Button>
    </div>
  )
}

export default Community;