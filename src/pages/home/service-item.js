import React from 'react';
import { Grid } from '@mui/material';

const ServiceItem = ({ item }) => {
  return (
    <Grid item xs={12} sm={12} md={4} lg={4} className="tc service-item mb2">
       <img src={item?.image} className="mb3"/>
       <h4 className="font-18-semibold text-nevy mb3">{item?.title}</h4>
       <p className="font-14-light text-grey pb3">{item?.serInfo}</p>
    </Grid>
  )
}

export default ServiceItem