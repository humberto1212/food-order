import React from 'react'
import './header.css'
import HeaderCartButton from './HeaderCartButton'




function Header(props) {
  return (
    <div>
        <header className='header-style'>
            <h1>FOOD-APP</h1>
             <HeaderCartButton onShowCart={props.onShowCart}/>
        </header>
    </div>
    
  )
}

export default Header
