import React, {useContext, useState, useEffect} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import MealItemForm from './MealItemForm';
import {CartContext} from '../../../store/CartContext';

export default function MealCards(props) {
 //const [numValue, setNumValue] = useState()
  
 let cartCtx = useContext(CartContext); 

 const addToCartHandle = (numValue) =>{
   
  cartCtx.addItem({
    id: props.id,
    name: props.name,
    amount: numValue,
    price: props.price,
  })

  }

  return (
  
    <li style={{margin: 10}} >
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Price: ${props.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Description:  {props.description}
        </Typography>
      </CardContent>
      <CardActions>
         <MealItemForm onAddToCard={addToCartHandle} id={props.id} /> 
      </CardActions>
    </Card>
  </li>
 
  )
}
