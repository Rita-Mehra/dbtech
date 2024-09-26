import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Container } from '@mui/material';
import { Menu } from '@mui/icons-material';
import Menus from './menu';
import './navbar.scss';

const Navbar = () => {

  const [menuopen, setMenuopen] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="navbar">
    <Container>
    <Grid container className="w-100 flex items-center top-nav-wrapper">
      <Grid item xs={12} sm={2} md={3} lg={3} className="icon-wrapper flex justify-between items-center ">
        <img src="/images/logo.png" height="100" onClick={() => navigate('/')} />
        <div className="menu-burger" onClick={() => setMenuopen(!menuopen)}>
         <Menu/>
        </div>
      </Grid>
      <Grid item xs={12} sm={10} md={9} lg={9}>
       <div className={menuopen ? "menu-open mt2" : "menu-hide"}> 
        <Menus />
       </div> 
      </Grid>
    </Grid>
    </Container>
    </div>  
  );
};

export default Navbar;
