import React, { useContext } from "react";
import Navbar from "../Component/Navbar";
import Announcement from "../Component/Announcement";
import styled from "styled-components";
import { ShopContext } from "../Context/product-context";
import { PopularProducts } from "../Data";
import CartItems from "../Component/CartItems";
import Newsletter from "../Component/Newsletter";
import Footer from "../Component/Footer";

const Container = styled.div`

`
const Info = styled.div`
display:flex;
justify-content:center;
align-items:center;
`
const CartText = styled.h1`
font-weight:300;
`
const CartItem = styled.div`
${'' /* display:flex; */}
margin-bottom:10px;
`




const Cart = ()=>{
    const{cartItems} = useContext(ShopContext)
    return(
        <>
            <Container>
             <Announcement/>
            <Navbar/>
            <Info>
                <CartText>
                    YOUR BAG
                </CartText>
            </Info>
            
            <CartItem>
                {PopularProducts.map((item)=>{
                    if(cartItems[item.id]!==0){
                        return(
                            <>
                                <CartItems data={item}/>
                                <hr/>
                            </>
                        )
                    }
                })}
               
            </CartItem>
          <Newsletter/>
          <Footer/>
            </Container>
        </>
    )
}

export default Cart;