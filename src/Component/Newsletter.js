import React from "react";
import styled from "styled-components";

const Container = styled.div`
text-align:center;
height:60vh;
padding:25px;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
background-color:#FCF5F5;
${'' /* margin:10px; */}
`
const Title = styled.h1`
font-size:70px;
font-weight:900;
margin-bottom:20px;
`
const Desc = styled.p`
font-size:24px;
font-weight:300;
margin-bottom:20px;
letter-spacing:2px;
`
const Mail = styled.div`
border:1px solid lightgray;
width:50%;
height:50px;
background-color:white;
display:flex;
justify-content:space-between;

`
const Button = styled.button`
${'' /* width:6%; */}
flex:1;
border:none;
background-color:teal;
color:white;
font-size:16px;
`
const Newsletter = ()=>{
    return(
        <>
            <Container>

                <Title>Newsletter</Title>
                <Desc>Get timely updates from your favorite products</Desc>
                <Mail>
                    <input
                    style={{
                        border:"none",
                        fontSize:"16px",
                        flex:"8",
                        paddingLeft:"28px"
                    }}
                        placeholder="Your email"
                    />
                    <Button>
                    <i className="fa fa-send-o"></i>
                    </Button>
                </Mail>
            </Container>
        </>
    )
}

export default Newsletter;