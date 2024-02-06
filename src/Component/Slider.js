import React, { useState } from "react";
import styled from "styled-components";
// import image1 from "../Assest/image11.png"
// import image2 from "../Assest/image3.png";
// import image3 from "../Assest/image6.png";
import { SliderItems } from "../Data";
const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    overflow:hidden;
    position:relative;
`
const Arrow = styled.div`
width:50px;
height:50px;
background-color:#fff7f7;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:0;
bottom:0;
left:${props =>props.direction === "left" && "10px"};
right:${props =>props.direction === "right" && "10px"};
margin:auto;
cursor:pointer;
opacity:0.5;
z-index:2;
`
const Wrapper = styled.div`
    height:100%;
    display:flex;
    transition: all 1.5s ease;
    transform:translateX(${props=>props.slideIndex*-100}vw);
`
const Slide = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    background-color: #${props =>props.bg}
    
`
const ImageContainer = styled.div`
    height:100%;
    width:100%;
    flex:1;
    display:flex;
    justify-content:center; 
    align-items:center;
`
const Image = styled.img`
    height:80%;
    
`

const InfoContainer = styled.div`
    flex:1;
    padding:50px
    
`
const TitleText = styled.h1`
    font-size:70px;
`
const Description = styled.p`
    margin:50px 0;
    font-size:20px;
    font-weight:500;
    letter-spacing:3px;

`
const ShopBtn = styled.button`
padding: 10px 30px ;
background-color: transparent;
font-size:20px;
cursor:pointer;
&:hover{
    scale:1.1;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

`
const Slider = ()=>{
    const[sliderClick,setSliderClick] = useState(0)
    const handleClick = (direction)=>{
        if(direction === "left"){
            setSliderClick(sliderClick>0 ? sliderClick-1 : 2)
        }
        else{
            setSliderClick(sliderClick<2? sliderClick+1:0)
        }
    }

    return(
        <>
            <Container>
                <Arrow direction = "left" onClick={()=>handleClick("left")}>
                <i className='fa fa-angle-left'></i>
                </Arrow>
                <Wrapper slideIndex ={sliderClick}>
                {SliderItems.map((item)=>{
                    return(
                        <Slide bg = {item.bg}>
                            <ImageContainer>
                            <Image src = {item.img} />
                            </ImageContainer>
                            <InfoContainer>
                            <TitleText>
                            {item.title}
                            </TitleText>
                            <Description>
                            {item.desc}
                            </Description>
                            <ShopBtn>SHOP NOW</ShopBtn>
                            </InfoContainer>
                        </Slide>
                    )
                })}
                   
                   
                    
                </Wrapper>
                <Arrow direction="right" onClick={()=>handleClick("right")}>
                <i className='fa fa-angle-right'></i>
                </Arrow>
            </Container>
        </>
    )
}

export default Slider;