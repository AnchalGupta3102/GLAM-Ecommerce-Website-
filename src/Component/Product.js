import React from "react";
import styled from "styled-components";
import ProductItem from "./ProductItem";
import { PopularProducts } from "../Data";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    flex-wrap:wrap;
`

const Product = ()=>{
    return(
        <>
            <Container>
            {PopularProducts.map((item)=>{
                return(
                    <ProductItem item={item}/>
                )
            })}
            </Container>
        </>
    )
}

export default Product;