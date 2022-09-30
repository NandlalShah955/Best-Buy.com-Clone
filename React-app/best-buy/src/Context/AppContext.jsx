import { createContext, useState } from "react";

export const AppContext=createContext();
export default function AppContextProvider({children}){
   const [cartData,setCartData]=useState([])
    const [auth,setAuth]=useState(false)
    const [qty,setQty]=useState(1)
    const handleQty=(val)=>{
        setQty(qty+val)
    }
    return(
        <AppContext.Provider value={{handleQty,cartData,setCartData,auth,setAuth}}>
            {children}
        </AppContext.Provider>
    )
}