import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Delete } from '@material-ui/icons';
import {
  addProduct,
  removeProduct,
  adjustQuantity,
} from '../actions/cartActions';
import EmptyCart from '../assets/empty__cart.jpg';
import Button from '../components/UI/Button';
import StripeCheckOutButton from '../components/Stripe/StripeButton';
import {
  Container,
  Wrapper,
  MobileWrapper,
  MobileContainer,
} from './Cart.styles';

const Cart = ({ cart, removeProduct, total, addProduct, adjustQuantity }) => {
  const mobileScreen = window.matchMedia('(max-width : 768px)').matches;

  if (cart.length === 0) {
    return (
      <Container>
        <img src={EmptyCart} alt="empty cart" className="empty__cart" />
        <h2>Ooops, Your Cart Is Empty!</h2>
        <Link to="/">
          {' '}
          <Button>Start Shopping</Button>
        </Link>
      </Container>
    );
  }
  if (mobileScreen) {
    return (
      <MobileWrapper>
        <h3>
          CART&nbsp;{cart.length === 1 ? 'ITEM' : 'ITEMS'}({cart.length})
        </h3>
        <MobileContainer>
          {cart.map((item) => (
            <div className="mobile__wrapper" key={item.id}>
              <div className="products__wrapper">
                <div>
                  <img src={item.image} alt="item" />
                </div>
                <div className="products__title__price">
                  <div>
                    <p className="products__title">{item.title}</p>
                    <h3 className="products__price">&#8358;{item.price}</h3>
                  </div>
                </div>
              </div>

              <div className="adjust__wrapper">
                <div className="remove__products">
                  <Delete
                    className="delete__icon"
                    onClick={() => removeProduct(item.id)}
                  />{' '}
                  <h4 className="remove">REMOVE</h4>
                </div>
                <div>
                  <button
                    className="qty__btn"
                    onClick={() => adjustQuantity(item)}
                  >
                    -
                  </button>
                  <label>{item.qty}</label>
                  <button
                    className="qty__btn"
                    onClick={() => addProduct(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="ruler"></div>
            </div>
          ))}
        </MobileContainer>
        <div className="payment__wrapper">
          <h3 className="total__price">TOTAL : &#8358;{total.toFixed(2)}</h3>
          <div className="test">
            *Please use the following test credit card for payment*
            <br />
            Number - 4242 4242 4242 4242 <br />
            Exp - Any future date &nbsp; CVV - Any 3 digits
          </div>
          <div className="pay__btn">
            <StripeCheckOutButton price={total} />
          </div>
        </div>
      </MobileWrapper>
    );
  } else {
    return (
      <Wrapper>
        <table>
          <tbody>
            <tr>
              <th>
                {cart.length === 1 ? 'ITEM' : 'ITEMS'}({cart.length})
              </th>
              <th>QUANTITY</th>
              <th>PRICE</th>
              <th>REMOVE</th>
            </tr>

            {cart.map((item) => (
              <tr key={item.id}>
                <td>
                  <img src={item.image} alt="product-cart" />
                  <span className="title">{item.title}</span>
                </td>

                <td>
                  <button
                    className="qty__btn"
                    onClick={() => adjustQuantity(item)}
                  >
                    -
                  </button>
                  <label>{item.qty}</label>
                  <button
                    className="qty__btn"
                    onClick={() => addProduct(item.id)}
                  >
                    +
                  </button>
                </td>
                <td>&#8358;{item.price * item.qty}</td>
                <td>
                  <Delete
                    className="delete__icon"
                    onClick={() => removeProduct(item.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="payment__wrapper">
          <h2 className="total__price">TOTAL : &#8358;{total.toFixed(2)}</h2>
          <div className="test">
            *Please use the following test credit card for payment*
            <br />
            Number - 4242 4242 4242 4242 <br />
            Exp - Any future date &nbsp; CVV - Any 3 digits
          </div>
          <div className="flex__btns">
            <Link to="/">
              <Button>Continue Shopping</Button>
            </Link>
            <StripeCheckOutButton price={total} />
          </div>
        </div>
      </Wrapper>
    );
  }
};
const mapStateToProps = (state) => ({
  cart: state.products.cart,
  total: state.products.cart.reduce(
    (accumulatedTotal, cartItem) =>
      accumulatedTotal + cartItem.price * cartItem.qty,
    0
  ),
});
const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (id) => dispatch(addProduct(id)),
    removeProduct: (id) => dispatch(removeProduct(id)),
    adjustQuantity: (id) => dispatch(adjustQuantity(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
