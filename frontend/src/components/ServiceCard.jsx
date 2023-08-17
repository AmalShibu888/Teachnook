import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import Bimal from '../images/BIMAL.jpg'
const ServiceCard = ({title , desc}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={Bimal}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  )
}

export default ServiceCard