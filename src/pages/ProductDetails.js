import { useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/UI/Button";
import { connect } from "react-redux";
import { addProduct } from "../actions/cartActions";
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
const ProductDetails = ({ product, addProduct }) => {
  const { id } = useParams();
  const productDetails = product.filter((detail) => detail.id == id);
  const addToCart = () => {
    addProduct(product.map((item) => item.id == id));
  };
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
                </div>
                <Button Click={addToCart}>Add to cart</Button>
              </Details>
            </Container>
          );
        })}
    </div>
  );
};

const mapToStateProps = (state) => ({
  product: state.products.products,
});
export default connect(mapToStateProps, { addProduct })(ProductDetails);
