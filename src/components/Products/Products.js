import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import ProductItem from "./ProductItem";
import { connect } from "react-redux";
import { fetchProducts, addProduct } from "../../actions/cartActions";
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
const Products = ({ product: { loading, products }, fetchProducts }) => {
  useEffect(() => {
    fetchProducts();
  }, []);
  /* const addToCart = (item) => {
    addProduct(item);
  };*/
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
            return <ProductItem product={product} />;
          })}
      </Grid>
    );
  }
};
const mapStateToProps = (state) => ({
  product: state.products,
});
/*
const mapDispatchToProps = dispatch => {
  return{
    addProduct : () => dispatch(addProduct())
  }
}*/
export default connect(mapStateToProps, { fetchProducts, addProduct })(
  Products
);
