import { useParams, Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import productContext from "../context/product/productContext";
import styled from "styled-components";
import Button from "../components/UI/Button";

const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
  flex-direction: column;
`;
const ImageWrapper = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 300px;
  height: 300px;
  .product__image {
    width: 100%;
    height: inherit;
  }
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  .title {
    font-size: 30px;
    font-weight: 600;
    padding-top: 20px;
  }
  .price {
    font-size: 20px;
    font-weight: 400;
  }
  .de {
    text-align: center;

    font-size: 20px;
  }
  .description {
    width: 50%;
    text-align: center;
    margin: 0 auto;
  }
`;
const ProductDetails = () => {
  const ProductContext = useContext(productContext);
  const { getProducts, products, cartItems } = ProductContext;
  console.log(ProductContext);
  const { id } = useParams();
  const productDetails = products.filter((detail) => detail.id == id);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {productDetails &&
        productDetails.map((product) => {
          return (
            <Container>
              <ImageWrapper>
                <img
                  className="product__image"
                  src={product.image}
                  alt="product image"
                />
              </ImageWrapper>
              <Details>
                <div className="title">{product.title}</div>
                <div className="price">₦{product.price}</div>
                <div>
                  <div className="de">Product details</div>
                  <div className="description">{product.description}</div>
                  <div>{cartItems.length}</div>
                </div>
                <Button>Add to cart</Button>
              </Details>
            </Container>
          );
        })}
    </div>
  );
};

export default ProductDetails;
