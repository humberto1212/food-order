import React, {useState} from "react"
import Header from "./component/Layout/Header"
import Meals from "./component/Meals/Meals"
import Cart from "./component/Cart/Cart"
import CartProvider from "./store/CartContext"


function App() {
  const [modalBool, setModalBool] = useState(false);

  const showCartHandler = () => {
    setModalBool(true)
  }

  const hideCartHandler = () => {
    setModalBool(false)
  }

  return (  
      <CartProvider>
        {modalBool && <Cart onHideCart={hideCartHandler}/>}
        <Header onShowCart={showCartHandler}/>
        <main>
          <Meals/>
        </main>
      </CartProvider>
  )
}

export default App
