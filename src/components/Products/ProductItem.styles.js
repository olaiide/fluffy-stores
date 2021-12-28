import styled from "styled-components";

export const Container = styled.div`
  width: 220px;
  height: 323px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
  @media screen and (min-width: 480px) and (max-width: 660px) {
    width: 400px;
    height: 480px;
  }
  @media screen and (max-width: 464px) {
    width: 38%;
    height: 410px;
  }
  .toast {
    width: 300px;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
  .img_wrapper {
    margin: 0 auto;
    width: 200px;
    height: 200px;
    padding-top: 7px;
    &:hover {
      width: 210px;
      transition: all 0.15s;
    }
    @media screen and (max-width: 464px) {
      width: 300px;
      height: 250px;
      height: 275px;
      &:hover {
        width: 300px;
      }
    }
    @media screen and (min-width: 480px) and (max-width: 660px) {
      width: 370px;
      height: 350px;
      margin: 0 auto;
      &:hover {
        width: 375px;
      }
    }
  }
  .img {
    width: 100%;
    height: inherit;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 120px;
  .product__name,
  .product__price {
    text-align: start;
    margin-left: 18px;
  }
  .product__name {
    font-size: 17px;
    font-weight: 500;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .product__price {
    font-size: 17px;
    font-weight: 400;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
