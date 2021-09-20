import React, { useContext, useEffect } from "react";
import { AddShoppingCart } from "@material-ui/icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import productContext from "../../context/product/productContext";
const Nav = styled.div`
  width: 100%;
  height: 80px;
  background-color: #8a2b06;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  @media screen and(max-width : 768px) {
    justify-content: space-evenly;
  }
  .logo {
    margin-left: 5rem;
    color: white;
    @media screen and(max-width : 768px) {
      margin-left: 0;
    }
  }
  .badge {
    color: #8a2b06;
    font-weight: bold;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    bottom: 3px;
  }
  .cart__icon {
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 12px;
    right: 150px;
    color: white;
  }
  .badge__wrapper {
    background-color: white;
    width: 25px;
    height: 25px;
    position: relative;
    top: -45px;
    right: 120px;
    border-radius: 50px;
  }
`;
const Navbar = () => {
  const context = useContext(productContext);
  const { cartItems } = context;
  return (
    <Nav>
      <h1 className="logo">E-Commerce</h1>
      <div>
        <Link to="/cart">
          <span>
            <AddShoppingCart className="cart__icon" />
          </span>

          <div className="badge__wrapper">
            <span className="badge">{cartItems.length}</span>
          </div>
        </Link>
      </div>
    </Nav>
  );
};

export default Navbar;
