import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import ProductItem from "./ProductItem";
import { connect } from "react-redux";
import { fetchProducts } from "../../actions/cartActions";
import "antd/dist/antd.css";
import { Skeleton } from "antd";
const Wrapper = styled.div`
  width: 80%;
  text-align: center;
  padding: 15px;
  margin: 0 auto;
  @media screen and (max-width: 480px) {
    width: 90%;
  }
  @media screen and (min-width: 480px) and (max-width: 660px) {
    width: 90%;
  }
`;

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 0.2fr);
  padding-top: 40px;
  row-gap: 50px;
  justify-items: center;
  justify-content: center;
  padding-bottom: 30px;
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 0.3fr);
  }
  @media screen and (min-width: 480px) and (max-width: 660px) {
    grid-template-columns: repeat(1, 0.3fr);
  }
  @media screen and (min-width: 660px) and (max-width: 1024px) {
    grid-template-columns: repeat(3, 0.3fr);
  }
`;
const Products = ({ product: { loading, products }, fetchProducts }) => {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (loading) {
    return (
      <Wrapper>
        <Skeleton active />
        <br />
        <Skeleton active />
      </Wrapper>
    );
  } else {
    return (
      <Grid>
        {products &&
          products.map((product) => {
            return <ProductItem key={product.id} product={product} />;
          })}
      </Grid>
    );
  }
};
const mapStateToProps = (state) => ({
  product: state.products,
});

export default connect(mapStateToProps, { fetchProducts })(Products);
