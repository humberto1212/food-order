import React from 'react'
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function CartButton() {
  return (
    <IconButton style={{width: 80}} color="primary" aria-label="cart">
        <ShoppingCartIcon>
        </ShoppingCartIcon>
    </IconButton>
  )
}

export default CartButton