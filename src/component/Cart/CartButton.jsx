import React, {useContext} from 'react'
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {CartContext} from '../../store/CartContext'

function CartButton(props) {

  const cartCtx = useContext(CartContext)
  
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
      return curNumber + item.amount;
    }, 0);

  return (
    <IconButton onClick={props.onShowCart} style={{width: 80}} color="primary" aria-label="cart">
        <ShoppingCartIcon/>
        {+numberOfCartItems}
    </IconButton>
  )
}

export default CartButton