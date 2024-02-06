import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import ProductList from "../Pages/ProductList";
const Container = styled.div`
height:60px;
${'' /* background-color: black */}
`
const Wrapper = styled.div`
 padding:10px 20px;
 display:flex;
`
const Left = styled.div`
    flex:1;
    display:flex;
`
const Center = styled.div`
    flex:1;
    text-align:center;
    margin-Top:-29px
`
const Right = styled.div`
    flex:1;
    display:flex;
    justify-content:flex-end;
`
const Language = styled.span`
 font-size:14px;
 cursor:pointer;
 width:10%;
`
const SearchContainer = styled.div`
${'' /* width:50%; */}
 border:0.5px solid lightgray;
 margin-left:25px;
 display:flex;
 ${'' /* height:70%; */}
 text-align:center;
 padding:5px;
 height:18px 
`
const Logo = styled.h1`
${'' /* font-size:20px; */}
font-weight:bold;
${'' /* text-align:center; */}
`
const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
margin-Left:25px
`
const Button = styled.button`
width:40%;
height:20px;
border:none;
padding:15px 10px;
margin-left:10px;
display:flex;
justify-content:center;
align-items:center;
background-color:teal;
color:white;
cursor:pointer;
`

const Navbar = () => {

    const navigate = useNavigate();
    const loggeduser = JSON.parse(localStorage.getItem("useName"))
    const flag = localStorage.getItem("loggedIn")

    const handleLogout = ()=>{
        localStorage.removeItem("loggedIn");
        navigate("/register")
    }

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>
                        EN
                    </Language>
                    <SearchContainer>
                        <input
                        placeholder="Search"
                            style={{
                               border:"none",
                            //   width:"100%",
                              fontSize:"13px",
                            //   padding:"5px"
                            //   height:"100%"
                            }}
                    
                       
                />
                <i
                    style={{
                        marginRight:"8px",
                        marginTop:"2px",
                        marginBottom:"4px",
                        color:"gray",
                        fontSize:"13px"
                    }}
                 class="fa fa-search"></i>

                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>GLAM.</Logo>
                </Center>
                <Right>
                <Link to="/"><MenuItem>HOME</MenuItem></Link>
                    
                    <MenuItem>{loggeduser}</MenuItem>
                    <Button
                        onClick={handleLogout}
                    >LOGOUT</Button>
                    
                    
                    
                    <Link to="/ShopCart">

                    <MenuItem>
                    <i className='fa fa-shopping-cart'></i></MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    );
};
export default Navbar; 