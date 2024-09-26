import React from 'react';
import { Button } from '@mui/material';
import './button.scss';


const BtnRound = ({ name, onClick }) => {
  return (
    <Button className="button" variant="contained" onClick={onClick}>{name}</Button>
  )
}

export default BtnRound