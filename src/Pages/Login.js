import React, { useState } from "react";
// import styled from "styled-components";

import styled from "styled-components";
import bgimg from "../Assest/mainbgimage4.jpg";
import { useNavigate } from "react-router";
const Container = styled.div`
height:100vh;
width:100vw;
background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),url(${bgimg})center  center no-repeat;
background-size:cover;
display:flex;
align-items:center;
justify-content:center;
`
const Wrapper = styled.div`
width:25%;
padding:20px;

;
${'' /* height:100%; */}
border:2px dotted lightgrey;
`
const Form = styled.form`
display:flex;
flex-direction:column;

`
const Title = styled.h1`
font-size:24px;
font-weight:300;    
`
const Input = styled.input`
flex:1;
min-width:40%;
margin:10px 0px;
padding:10px;
`
const Agreement = styled.span`
font-size:12px;
margin:20px 0px;
`
const Button = styled.button`
width:20%;
border:none;
padding:5px 5px;
background-color:teal;
color:white;
cursor:pointer;
margin-right:25px;
`

const Login = ()=>{

        const navigate = useNavigate();
    const[userName,setUserName] = useState()
    const[password,setPassword] = useState()

    const handleLogin = (e)=>{
        e.preventDefault();
        const loggeduser = JSON.parse(localStorage.getItem("useName"));
        const loggedPassword = JSON.parse(localStorage.getItem("Password"));


        if(userName=== loggeduser && password===loggedPassword){
            localStorage.setItem("loggedIn",true)
            navigate("/");
            
        }
        else{
            alert("Credentials are incorrect");
        }
    }
    const handleButton=()=>{
        navigate("/register")
    }
    return(
        <>
            <Container>
                <Wrapper>
                    <Title>SIGN IN</Title>
                    <Form onSubmit={handleLogin}>
                       
                        <Input placeholder="Username"
                            type="text"
                            value={userName}
                            onChange={(e)=>setUserName(e.target.value)}
                         />
                        <Input placeholder="Password"
                            type="password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                         />
                        
                        <div 
                        style={{
                            display:"flex",
                        }}
                        >
                        <Button>LOGIN</Button>
                        <Button onClick={handleButton}>New User</Button>
                        </div>
                    </Form>
                </Wrapper>
            </Container>
        </>
    )
}
export default Login;