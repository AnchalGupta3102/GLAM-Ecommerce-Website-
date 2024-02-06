import React from "react";
import styled from "styled-components";

const Container = styled.div`
    flex:1;
    margin:3px;
    height:70vh;
    position:relative;
`
const Image = styled.img`
width:100%;
height:100%;
${'' /* object-fit:cover; */}
`
const Info = styled.div`
position:absolute;
width:100%;
height:100%;
top:0;
left:0;
display:flex;
align-items:center; 
flex-direction:column;
justify-content:center;
`
const Title = styled.h1`
color:white;
margin-bottom:20px;

`
const Button = styled.button`

border:none;
padding:10px;
background-color:white;
color:gray;
cursor:pointer;
font-weight:600;

&:hover{
    scale:1.1;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
`
const CategoryItem =(props)=>{
    return(
        <>
            <Container>
                <Image src={props.item.img}></Image>
                <Info>
                    <Title>{props.item.title}</Title>
                    <Button>SHOP NOW</Button>
                </Info>
            </Container>
        </>
    )
}

export default CategoryItem;