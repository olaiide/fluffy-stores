import { AddShoppingCart } from "@material-ui/icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Nav = styled.div`
  width: 100%;
  height: 80px;
  background-color: #8a2b06;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);

  .logo {
    margin-left: 5rem;
    color: white;
    @media screen and (max-width: 768px) {
      margin-left: 3rem;
      font-size: 23px;
    }
  }
  .cart__wrapper {
    margin-right: 3rem;
    @media screen and (max-width: 464px) {
      margin-right: 4rem;
    }
  }

  .badge {
    color: #8a2b06;
    font-weight: bold;
    font-size: 20px;
    position: relative;
    bottom: 3px;
    @media screen and (max-width: 768px) {
      
      bottom : 5px;
    }
  }
  .cart__icon {
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;

    @media screen and (max-width: 464px) {
      font-size: 45px;
    }
  }
  .badge__wrapper {
    background-color: white;
    width: 25px;
    height: 25px;
    text-align: center;
    display: table-cell;
    vertical-align: middle;
    position: absolute;
    right: 27px;
    top: 5px;
    border-radius: 50px;
    @media screen and (max-width: 464px) {
      top: 10px;
      right: 33px;
      width: 25px;
      height: 25px;
    }
  }
`;
const Navbar = ({ cart }) => {
  return (
    <Nav>
      <div>
        <h1 className="logo">Floffy Stores</h1>
      </div>
      <div className="cart__wrapper">
        <Link to="/cart">
          <div className="badge__wrapper">
            <span className="badge">{cart.length === 0 ? 0 : cart.length}</span>
          </div>
          <span>
            <AddShoppingCart className="cart__icon" />
          </span>
        </Link>
      </div>
    </Nav>
  );
};
const mapStateToProps = (state) => ({
  cart: state.products.cart,
});
export default connect(mapStateToProps)(Navbar);
