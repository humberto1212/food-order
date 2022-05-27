import React, { useReducer } from "react"

//Default cart value 
const defaultCartState = {
    items: [],
    totalAmount: 0,
}

//Reducer
const cartReducer = (state, action) =>{
    if (action.type === 'ADD'){
        const updateItem = state.items.concat(action.item)
        const updateAmount = state.totalAmount + action.item.price * action.item.amount
        return {
            items: updateItem,
            totalAmount: updateAmount
        }
    }

    return defaultCartState
}

export const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {}
  });

const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemToCartHandle = (item) => { 
        dispatchCartAction({type: 'ADD', item: item})
    }

    const removeItemFromCartHandle = (itemId) => {
        dispatchCartAction({type: 'REMOVE', itemId: itemId })
     }

    const cartContextVal = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandle,
        removeItem: removeItemFromCartHandle,
    }
    

    return (
        <CartContext.Provider value={cartContextVal}>    
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
