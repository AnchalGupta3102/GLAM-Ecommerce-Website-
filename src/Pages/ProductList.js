import React from "react";
import styled from "styled-components"
import Navbar from "../Component/Navbar";
import Announcement from "../Component/Announcement";
import Product from "../Component/Product";
import Newsletter from "../Component/Newsletter";
import Footer from "../Component/Footer";

const Container =  styled.div`

`

const Title = styled.h1`
margin:20px;
`

const FilterContainer = styled.div`
display:flex;
justify-content: space-between; 

`

const Filter = styled.div`
margin:20px;
`
const FilterText = styled.span`
 font-size:20px;
 font-weight:600;
 margin-right:20px;
`
const Select = styled.select`
margin-right:20px;
padding:10px;
border:1px solid lightgrey;
color:gray;
`
const Option = styled.option`
padding:5px
`

const ProductList = ()=>{
    return(
        <>
        <Container>
            <Announcement/>
            <Navbar/>
            <Title> Dresses</Title>
            <FilterContainer>
            
                <Filter>
                <FilterText>
                    Filter Products:
                </FilterText>
                <Select>
                    <Option>Color</Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>
                </Select>
                <Select>
                  <Option>Size</Option>
                   <Option>XS</Option>
                   <Option>M</Option>
                   <Option>L</Option>
                   <Option>XL</Option>
                  
                  </Select>
                </Filter>
                <Filter>
                  <FilterText>
                    Sort Products:
                  </FilterText>
                  <Select>
                    <Option>Newest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                  </Select>
                </Filter>
            </FilterContainer>
            <Product/>
            <Newsletter/>
            <Footer/>
        </Container>

        </>
    )
}
export default ProductList;