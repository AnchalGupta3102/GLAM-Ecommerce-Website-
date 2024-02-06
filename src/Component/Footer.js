import React from "react";
import styled from "styled-components";

const Container = styled.div`
 height:30vh;
 display:flex;
 ${'' /* margin:20px; */}


`
const Firstheading = styled.div`
flex:1;
padding:20px
`
const Title = styled.h1`
font-size:30px;
font-weight:bold;
`
const Desc = styled.p`
width:70%;
font-size:16px;
${'' /* margin-top:10px; */}
`


const Secondheading = styled.div`
flex:1;
padding:20px;
`
const LinkText = styled.h3`
`
const  Linkcontainer = styled.div`
display:flex;
width:100%;

`
const Links = styled.div`
 text-decoration:none;
 margin-top:10px;
 margin-right:25px;
 flex:1;
 font-size:16px;
 ${'' /* list-decoration:none; */}
 
`
const Thirdheading = styled.div`
flex:1;
padding:20px;
margin-left:10px;

`
const ContactList = styled.div`
display:flex;
align-items:center;
${'' /* padding-bottom:5px; */}
margin-top:20px;
`

const Footer = () => {
    return(
        <>
         <Container>
            <Firstheading>
             <Title>GLAM.</Title>
             <Desc>GLAM.  is your one-stop shop for designer pieces at an affordable price. With an ever-changing selection of clothes for men, women, and children, you’ll find something for any occasion.</Desc>
            
            </Firstheading>
            <Secondheading>
            <LinkText>Useful Links</LinkText>
            <Linkcontainer>
            <Links>
                
                    <li>Home</li>
                    <li>Man Fashion</li>
                    <li>Accessories</li>
                    <li>Order Tracking</li>
                    <li>Wishlist</li>
                    </Links>
                    <Links>
                    <li>Cart</li>
                    <li>Woman Fashion</li>
                    <li>My Account</li>
                    <li>Wishlist</li>
                    <li>Terms</li>
                
            </Links>
            </Linkcontainer>
            </Secondheading>
            <Thirdheading>
                <LinkText>Contact</LinkText>
                <ContactList>
                    
                <i
                    style={{
                        marginRight:"10px"
                    }}
                 className="fa fa-map-marker"></i>
                   
                622 Dixie Path, South Delhi
                </ContactList>
                <ContactList>
                
                <i 
                 style={{
                        marginRight:"10px"
                    }}
                className='fa fa-phone'></i>
              
                +91 8931266320
                </ContactList>
                <ContactList>
               
                <i 
                 style={{
                        marginRight:"10px"
                    }}
                className="fa fa-envelope"></i>
              
                contact@gmail.com
                </ContactList>
                
            </Thirdheading>
         </Container>
        </>
    )
}

export default Footer;