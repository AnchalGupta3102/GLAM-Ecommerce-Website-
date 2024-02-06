import React, { useState } from "react";
import styled from "styled-components";
import bgimg from "../Assest/mainbgimage4.jpg"
import { useNavigate } from "react-router";
// import constructWithOptions from "styled-components/dist/constructors/constructWithOptions";
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
width:40%;
padding:20px;

;
${'' /* height:100%; */}
border:2px dotted lightgrey;
`
const Form = styled.form`
display:flex;
flex-wrap:wrap;

`
const Title = styled.h1`
font-size:24px;
font-weight:300;    
`
const Input = styled.input`
flex:1;
min-width:40%;
margin:20px 10px 0px 0px;
padding:10px;
`
const Agreement = styled.span`
font-size:12px;
margin:20px 0px;
`
const Button = styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color:teal;
color:white;
cursor:pointer;
margin-right:10px;
`

const Register = ()=>{

    const navigate = useNavigate();
    
    const[name,setName] = useState("");
    const[lastName,setLastName] = useState("");
    const[userName,setUserName] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[flag,setFlag] = useState(false);
    const[login,setLogin] = useState(true);

const handleSubmit = (e)=>{
    e.preventDefault();
    if(!name || !lastName || !userName|| !email|| !password){
        setFlag(true);
    }
    else{
        setFlag(false);
        localStorage.setItem("Email",JSON.stringify(email));
        localStorage.setItem("Password",JSON.stringify(password));
        localStorage.setItem("useName",JSON.stringify(userName));
         
        navigate("/login");
        // setLogin(!login);
    }
}

const handleLogin = ()=>{
    navigate("/login")
}
    return(
        <>
            <Container>
                <Wrapper>
                    <Title>CREATE AN ACCOUNT</Title>
                    <Form onSubmit={handleSubmit}>
                        <Input placeholder="Name" 
                                type="text"
                                value={name}
                            onChange={(e)=>setName(e.target.value)}
                        />
                        <Input placeholder="Last Name"
                        type="text"
                        value={lastName}
                            onChange={(e)=>setLastName(e.target.value)}
                         />
                        <Input placeholder="Username" 
                        type="text"
                        value={userName}
                            onChange={(e)=>setUserName(e.target.value)}
                        />
                        <Input placeholder="Email" 
                        type="email"
                        value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                        <Input placeholder="Password" 
                        type="password"
                        value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                        {/* <Input placeholder="Confirm Password"
                            type="password"

                         /> */}
                        <Agreement>
                            By creating an account, I consent to the processing of my 
                            personal data in accordance with the <b>PRIVACY POLICY</b>
                        </Agreement>
                        <Button onClick={handleLogin} >Alreay a User</Button>
                        <Button>CREATE</Button>
                        {
                            flag &&(
                                alert("Please Fill Every Field")
                            )
                        }
                    </Form>
                </Wrapper>
                
            </Container>
        </>
    )
}
export default Register;