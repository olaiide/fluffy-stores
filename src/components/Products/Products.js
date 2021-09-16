import React from "react";
import styled from "styled-components";
import { useContext, useEffect } from "react";
import Product from "./Product";
import productContext from "../../context/product/productContext";
import "antd/dist/antd.css";
import { Skeleton } from "antd";
const Wrapper = styled.div`
  width: 60%;
  text-align: center;
  padding: 15px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 0.2fr);
  padding-top: 40px;
  row-gap: 50px;
  justify-items: center;
  justify-content: center;
  padding-bottom: 30px;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 0.3fr);
  }
`;
const Products = () => {
  const context = useContext(productContext);
  const { products, getProducts, loading, addToCart } = context;
  const addToCartHandler = () => {
    addToCart(products);
  };
  useEffect(() => {
    getProducts();
  }, []);

  if (loading) {
    return (
      <Wrapper>
        <Skeleton active className="skeleton__loader" />
        <br />
        <Skeleton active />
      </Wrapper>
    );
  } else {
    return (
      <Grid>
        {products &&
          products.map((product) => {
            return <Product product={product} addToCart={addToCartHandler} />;
          })}
      </Grid>
    );
  }
};

export default Products;
