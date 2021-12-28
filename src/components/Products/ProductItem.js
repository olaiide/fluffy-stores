import Button from "../UI/Button";
import { connect } from "react-redux";
import { addProduct } from "../../actions/cartActions";
import { Container, Wrapper, ButtonWrapper } from "./ProductItem.styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Product = ({ product: { id, image, title, price }, addProduct }) => {
  const notify = () =>
    toast.success("Item Added To Cart", {
      position: "top-right",
      autoClose: 2000,
      closeOnClick: true,
    });
  const addToCartHandler = () => {
    addProduct(id);
    notify();
  };

  return (
    <Container>
      <ToastContainer className="toast" />
      <div className="img_wrapper">
        <img className="img" src={image} alt="product" />
      </div>
      <Wrapper>
        <div className="product__name">{title}</div>
        <h4 className="product__price">₦{price}</h4>
        <ButtonWrapper>
          <Button Click={addToCartHandler}>Add to cart</Button>
        </ButtonWrapper>
      </Wrapper>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (id) => dispatch(addProduct(id)),
  };
};
export default connect(null, mapDispatchToProps)(Product);
