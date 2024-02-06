import React, { useContext } from "react";
import styled from "styled-components";
import { ShopContext } from "../Context/product-context";
const Container = styled.div`
`
const Wrapper = styled.div`
display:flex;
`
const Left = styled.div`
flex:1;

`
const ImgContainer = styled.div`
height:50vh;
width:20vw;
margin:10px;
padding:20px;
${'' /* display:flex;
flex-direction:column;
align-items:center; */}

`

const Img = styled.img`
height:100%;
width:100%;
${'' /* display:flex;
flex-direction:row;
align-items:center; */}
border-radius:40%
`
const Right = styled.div`
flex:2;
margin:10px;
display:flex;
`

const Info = styled.div`
flex:1;

`

const ProductText = styled.h4`
width:100%;
display:flex;
font-size:28px;
`
const Text = styled.span`
font-size:25px;
font-weight:200;
margin-left:10px;
`
const LeftText = styled.div`
flex:1;
margin:30px;

`
const CountCard = styled.div`
width:10%;
height:10%;
display:flex;
margin-top:40px;
`
const Count= styled.button`
background-color: transparent;  
padding:10px;
font-size:18px;

border: 2px solid teal; 
border-radius: 20%;
display:flex;
justify-content:center;
align-items:center;

&:hover{
    scale:1.1;
}
`
const CountText = styled.span`
width:70px;
height:35px;
${'' /* background-color:pink; */}
padding-left:10px;
padding-right:10px;
padding-top:4px;
${'' /* margin:5px; */}
${'' /* display:flex; */}
${'' /* justify-content:center; */}
${'' /* align-items:center; */}
`

const CartItems = (props)=>{
    const{img} = props.data
    const{addtoCart,removeToCart,cartItems}=useContext(ShopContext)
    return(
        <>
            <Container>
            <Wrapper>
                <Left>
                   <ImgContainer>
                    <Img src={img}/>
                   </ImgContainer>                          
               </Left>
               <Right>
               <Info>
                    <ProductText>
                        Product:
                        <Text>{props.data.product}</Text>
                    </ProductText>
                    
                    <ProductText>
                    ID:
                    <Text>{props.data.ProductId}</Text>
                    </ProductText>
                  
                    <ProductText>
                    Price:
                    <Text>{props.data.price}</Text>
                    </ProductText>
                    </Info>

                    <LeftText>
                        <CountCard>
                            <Count onClick={()=>addtoCart(props.data.id)}>
                                +
                            </Count>
                            <CountText>
                                    {cartItems[props.data.id]}
                            </CountText>
                            <Count onClick={()=>removeToCart(props.data.id)}>-</Count>
                        </CountCard>
                    </LeftText>
                </Right>
                </Wrapper>
            </Container>
        </>
    )
}

export default CartItems;