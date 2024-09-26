import React from 'react';
import { Container } from '@mui/material';

const Header = ( item ) => {
  return (
    <header className="home-header relative">
        <Container className="tc">
          <h1 className="font-48-light text-nevy">{item?.title}</h1>
          <p className="font-16-light text-grey">{item?.info}</p>
          <img src={item?.banner} />
        </Container>
      </header>
  )
}

export default Header