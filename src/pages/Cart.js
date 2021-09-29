import { connect } from "react-redux";
import styled from "styled-components";
import { Delete } from "@material-ui/icons";
const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  background-color: whitesmoke;
  min-height: 100vh;
  .title {
    margin-left: 15px;
  }
  .delete__icon {
    font-size: 25px;
    cursor: pointer;
  }
  .currency {
    // margin-right: 3px;
    font-size: 16px;
  }
  table {
    width: 70%;
    border-collapse: collapse;
  }
  th,
  td {
    padding: 13px;
    text-align: center;
  }
  td {
    border-bottom: 7px solid gainsboro;
    border-right: 2px solid gainsboro;
    background-color: white;
  }
  td:last-child {
    border-right: none;
    font-size: 16px;
  }
  td:first-child {
    text-align: left;
    font-size: 16px;
    margin-left: 30px;
    font-weight: 500;
    width: 55%;
    line-height: 1.25;
  }
  td:nth-child(2),
  td:nth-child(3) {
    font-weight: 600;
    font-size: 16px;
  }
  th:first-child {
    text-align: left;
  }

  th {
    opacity: 0.6;
    padding-bottom: 5px;
  }
  img {
    width: 80px;
    height: auto;
  }
`;
const Cart = ({ cart }) => {
  return (
    <Wrapper>
      <table>
        <tr>
          <th>ITEM</th>
          <th>QUANTITY</th>
          <th>PRICE</th>
          <th>REMOVE</th>
        </tr>

        {cart.map((item) => (
          <tr>
            <td>
              <img src={item.image} alt="product-cart-image" />
              <span className="title">{item.title}</span>
            </td>

            <td>{item.qty}</td>
            <td>
              <span className="currency">₦</span>
              {item.price}
            </td>
            <td>
              <Delete className="delete__icon" />
            </td>
          </tr>
        ))}
      </table>
    </Wrapper>
  );
};
const mapStateToProps = (state) => ({
  cart: state.products.cart,
});
export default connect(mapStateToProps)(Cart);
