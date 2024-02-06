import React from "react";
 import styled from "styled-components";

const Container = styled.div`
    height:30px;
    background-color:teal;
    color:white;
    text-align:center;
    padding-Top:2px;
`

const Announcement = () => {
  return (
    <Container>
       Super Deal! Free Shipping on Order Over ₹500
    </Container>
  );
};

export default Announcement;