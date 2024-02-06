import React, { createContext, useState } from "react";
import { PopularProducts } from "../Data";

export const ShopContext = createContext();

const getDefaultCart  =()=>{
    let cart={};
    for(let i=1;i<PopularProducts.length+1;i++){
        cart[i]=0;
    }
    return cart;
}

 export const ProductcontextProvider = (props)=>{

    const [cartItems,setCartItems] = useState(getDefaultCart())

    const addtoCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }

    const removeToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const contextValue = {
        cartItems,addtoCart,removeToCart
    }

    console.log("cartItem",cartItems)
    return(
        <>
            <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
        </>
    )
}
// export default Productcontext;