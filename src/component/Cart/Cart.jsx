import React, {useContext} from 'react'
import { Button } from '@mui/material'
import BasicModal from '../UI/Modal'
import {CartContext} from '../../store/CartContext'

function Cart(props) {

  const cartCtx = useContext(CartContext)


  return (
      <>
      <BasicModal onHideCart={props.onHideCart}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <span>Total amount: {parseFloat(cartCtx.totalAmount).toFixed(2)}</span>
        </div>
        <ul style={{display: 'flex', flexDirection: 'column'}}>
          {
            cartCtx.items.map((item) => {
              return <li key={item.id}>{item.name}: {item.amount}</li>
            })
          }
        </ul>
        <div>
            <Button onClick={props.onHideCart}>Close</Button>
            <Button>Order</Button>
        </div>
    </BasicModal>
    </>
  )
}

export default Cart