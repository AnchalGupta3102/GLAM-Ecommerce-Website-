import React, { useContext } from "react"; 
import styled from "styled-components";
import { ShopContext } from "../Context/product-context";

const Info = styled.div`
  width:100%;
  height:100%;
 display:flex;
 position:absolute;
  top:0;
  left:0;
  background-color:rgba(0,0,0,0.2);;
  z-index:2;
  align-items:center;
  justify-content:center;
  opacity:0;
  transition:all 0.5s ease;

 ${'' /* flex-direction:column; */}
`
const Container = styled.div`
 flex:1;
 margin:5px;
 min-width:300px;
 height:350px;
 display:flex;
 align-items:center;
 position:relative;
${'' /* background-color:#F5FCFC; */}

  &:hover ${Info}{
        opacity:1;

  }

`
const Image = styled.img`
    width:100%;
    height:100%;
`

const Icon = styled.div`
    height:40px;
    width:40px;
    border-radius:50%;
    background-color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:10px;
    cursor:pointer;
    transition:all 0.5s ease;

 &:hover{
    background-color:#e9f5f5;
    transform:scale(1.1);
     
 }

`

const ProductItem = (props) => {
    const{addtoCart} = useContext(ShopContext)
    const{id} =props.item
    return(
        <>
            <Container>
                <Image src={props.item.img}/>
                <Info>
                    <Icon onClick={()=>addtoCart(id)}>
                    <i className='fa fa-shopping-cart'></i> 
                    </Icon>
                    <Icon>
                    <i className="fa fa-search"></i>
                    </Icon>
                    <Icon><i className='fa fa-heart'></i></Icon>
                </Info>
            </Container>
        </>
    )
}

export default ProductItem