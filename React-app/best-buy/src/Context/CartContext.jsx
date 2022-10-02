import React from 'react'

const reducer=(state,action)=>{
 switch (action.type) {
    case "REMOVE_FROM_CART":{
        const cartAfterRemoval=state.filter(
            (item)=>item.id != action.payload
        )
    return cartAfterRemoval
    }
       
 
    default:
        return state
 }
}



export const CartContext=React.createContext()

const initstate=[]

function CartContextProvider({ children}) {
 const [state, dispatch] = React.useReducer(reducer,initstate)
 
 
    return (
    <CartContext.Provider value={{state,dispatch}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider