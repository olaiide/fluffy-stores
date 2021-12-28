import styled from "styled-components";
export const MobileWrapper = styled.div`
  background-color: gainsboro;
  min-height: 100vh;
  padding: 20px;
  .payment__wrapper {
    padding-bottom: 20px;
  }
  .total__price {
    text-align: end;
    font-weight: bold;
    padding-top: 10px;
    
  }
  .test {
    text-align: center;
    color: red;
    font-size: 16px;
    padding-bottom: 10px;
  }
  .pay__btn {
    margin: 10px;
    text-align: center;
  }
`;
export const MobileContainer = styled.div`
  margin: 0 auto;
  padding: 20px;
  border: 1px solid gainsboro;
  background-color: white;
  .products__wrapper {
    display: flex;
    margin-top: 20px;
  }
  .products__title__price {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 200px;
    margin-left: 3rem;
  }
  .products__price {
    margin-top: -10px;
  }
  img {
    width: 70px;
    height: auto;
  }
  .adjust__wrapper {
    display: flex;
    justify-content: space-between;
    //  border-bottom: 3px solid gainsboro;
    padding-bottom: 5px;
  }
  .remove__products {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 12px;
  }
  .delete__icon {
    font-size: 25px;
    cursor: pointer;
  }
  .remove {
    padding-left: 10px;
    margin-top: 5px;
  }
  .qty__btn {
    color: white;
    background-color: #8a2b06;
    border: none;
    outline: none;
    padding: 0px 6px 0px 6px;
    margin: 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 17px;
    border-bottom: 1px solid black;
  }
  .ruler {
    border-bottom: 3px solid gainsboro;
  }
`;
export const Container = styled.div`
  text-align: center;
  padding: 10px;
  h2 {
    padding-bottom: 15px;
    padding: 10px 0 15px 0;
  }
  .empty__cart {
    width: 300px;
    height: auto;
  }
`;
export const Wrapper = styled.div`
  padding: 20px;
  text-align: center;
  background-color: gainsboro;
  min-height: 100vh;
  .title {
    margin-left: 15px;
  }
  .delete__icon {
    font-size: 25px;
    cursor: pointer;
  }
  .currency {
    font-size: 16px;
  }
  .qty__btn {
    color: white;
    background-color: #8a2b06;
    border: none;
    outline: none;
    padding: 0px 6px 0px 6px;
    margin: 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 17px;
  }
  table {
    width: 70%;
    border-collapse: collapse;
    margin: 0 auto;
    text-align: center;
  }
  th,
  td {
    padding: 13px;
    text-align: center;
  }
  td {
    border-bottom: 6px solid gainsboro;
    border-right: 3px solid gainsboro;
    background-color: #fff;
  }
  td:last-child {
    border-right: none;
    font-size: 16px;
  }
  td:first-child {
    text-align: left;
    width: 50%;
    font-size: 16px;
    margin-left: 30px;
    font-weight: 500;
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
    opacity: 0.8;

    padding-bottom: 5px;
    font-size: 15px;
  }
  img {
    width: 60px;
    height: auto;
  }
  .payment__wrapper {
    width: 70%;
    text-align: center;
    margin: 0 auto;
    margin-top: 30px;
  }
  .test {
    color: red;
    font-size: 20px;
    padding-bottom: 20px;
  }
  .total__price {
    text-align: right;
  }
  .flex__btns {
    display: flex;
    justify-content: space-between;
  }
`;
