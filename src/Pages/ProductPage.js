import React, { useState } from "react";
import styled from "styled-components"
import Announcement from "../Component/Announcement";
import Navbar from "../Component/Navbar";
import Newsletter from "../Component/Newsletter";
import Footer from "../Component/Footer";
import image from "../Assest/productimage2.png"

const Container = styled.div``
const Wrapper = styled.div`
display:flex;
padding:40px;
margin:20px
`
const Left = styled.div`
flex:1;
`
const ImageContainer = styled.div`
height:100vh;
width:40vw;
padding:20px;
`
const Image = styled.img`
height:100%;
width:100%;
`
const Right = styled.div`
flex:1;

`
const Title = styled.h1`
font-weight:200;
`
const Desc = styled.p`
font-size:18px;
font-weight:200;
`
const Price = styled.h1`
font-size:35px;
font-weight:200;
`
const Choice = styled.div`
display:flex;
${'' /* margin-right:-50px; */}
${'' /* width:20px; */}
${'' /* height:40px; */}
`
const LeftText = styled.div`
display:flex;
flex:1;
`
const RightText = styled.div`
flex:1;
`
const ColorText = styled.span`
margin-right:10px;
font-size:18px;
font-weight:200;
`

const Color = styled.div`
border-radius: 50%;
width:20px;
height:20px;
background-color:${props=>props.bg};
cursor:pointer;
margin-right:10px;
`
const Select = styled.select`
border:1px solid teal;
padding:10px;
color:gray;
`
const Option = styled.option`
font-size:15px;
`

const Cart = styled.div`
display:flex;
margin-top:40px;
`
const CountText = styled.span`
margin-right:10px;
font-size:30px;
cursor:pointer;
&:hover{
    scale:1.1;  
}
`
const CounterBox = styled.div`
width:40px;
height:40px;
margin-right:10px;
border-radius: 20%;
border:1.5px solid teal;
text-align:center;
display:flex;
justify-content:center;
align-items:center;


`

const Button = styled.button`
    background-color: transparent;
    padding:15px;
    border: 2px solid teal;
    ${'' /* color: grey; */}
    font-weight:200;

    &:hover{
        scale:1.1;
    }
`

const ProductPage = ()=>{

    const[count,setCount] = useState("0");
    
    const handleClick = (e)=>{
        if(e=="decrement"){
            setCount(count>0? count-1 : 0)
        }
        else{
            setCount(count<10? count+1 : 10)
        }
    }

    return(
        <>
            <Container>
                <Announcement/>
                <Navbar/>
                <Wrapper>
                    <Left>
                    <ImageContainer>
                        <Image src={image}></Image>
                        </ImageContainer>
                    </Left>
                    <Right>
                        <Title>Denim Jeans</Title>
                        <Desc>Denim is a sturdy cotton twill fabric woven with an indigo, gray, or mottled white yarn. Denim is perhaps one of the most well-known and commonly worn fabrics there is, from the classic blue jeans to jackets, dresses, overalls, and more. For almost a hundred and fifty years the blue jean has been a symbol of classic Americana.</Desc>
                        <Price>₹ 1000.00</Price>
                        <Choice>
                        <LeftText>
                            <ColorText>Color</ColorText>
                            <Color bg="blue" ></Color>
                            <Color bg="black"></Color>
                            <Color bg="gray"></Color>
                        </LeftText>
                        <RightText>
                        <ColorText>Size</ColorText>
                            <Select>
                                <Option>Size</Option>
                                <Option>XS</Option>
                                <Option>S</Option>
                                <Option>M</Option>
                                <Option>L</Option>
                                <Option>XL</Option>
                            </Select>
                        </RightText>
                        </Choice>

                        <Cart>
                            <LeftText>
                                <CountText onClick={()=>handleClick("decrement")}>-</CountText>
                                <CounterBox>{count}</CounterBox>
                                <CountText onClick={()=>handleClick("increment")}>+</CountText>
                            </LeftText>
                            <RightText>
                                <Button>ADD TO CART</Button>
                            </RightText>
                        </Cart>
                    </Right>
                </Wrapper>
                <Newsletter/>
                <Footer/>
            </Container>
        </>
    )
}

export default ProductPage;