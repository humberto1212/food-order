import React from 'react'
import { Button } from '@mui/material'
import BasicModal from '../UI/Modal'

function Cart(props) {
  return (
      <>
      <BasicModal onHideCart={props.onHideCart}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <span>Total amount:</span>
            <span>!!..Total price dinamic..!!</span>
        </div>
        <div>
            <Button onClick={props.onHideCart}>Close</Button>
            <Button>Order</Button>
        </div>
    </BasicModal>
    </>
  )
}

export default Cart