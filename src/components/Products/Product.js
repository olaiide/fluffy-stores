import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../UI/Button";
const Container = styled.div`
  width: 220px;
  height: 330px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 768px) {
    width: 300px;
  }
  .img {
    height: 200px;
  }
  .image {
    width: 100%;
    height: inherit;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 120px;
  .product__name,
  .product__price {
    text-align: start;
    margin-left: 18px;
  }
  .product__name {
    font-size: 17px;
    font-weight: 500;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .product__price {
    font-size: 17px;
    font-weight: 200;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Product = ({ product: { id, image, title, price }, addToCart }) => {
  return (
    <Container>
      <Link to={`/product/${id}`}>
        <div className="img">
          <img className="image" src={image} />
        </div>
      </Link>
      <Wrapper>
        <div className="product__name">{title}</div>
        <h4 className="product__price">₦{price}</h4>
        <ButtonWrapper>
          <Button Click={addToCart}>Add to cart</Button>
        </ButtonWrapper>
      </Wrapper>
    </Container>
  );
};

export default Product;
