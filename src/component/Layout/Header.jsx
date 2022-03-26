import React from 'react'
import './header.css'
import HeaderCartButton from './HeaderCartButton'




function Header() {
  return (
    <div>
        <header className='header-style'>
            <h1>FOOD-APP</h1>
             <HeaderCartButton/>
        </header>
    </div>
    
  )
}

export default Header
