import React, {useContext} from 'react'
import CartButton from '../Cart/CartButton'

function HeaderCartButton(props) {

  return (
    <>
      <CartButton onShowCart={props.onShowCart}/>
    </>
  )
}

export default HeaderCartButton