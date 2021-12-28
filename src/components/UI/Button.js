import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #8a2b06;
  color: white;
  width: 190px;
  padding: 0.7rem 0.8rem;
  outline: none;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    opacity: 0.76;
    background-color: #915329;
    background-color: #591f08;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }
  /* @media screen and (min-width: 480px) and (max-width: 660px) {
    width: 90%;
  }
  @media screen and (max-width: 480px) {
    width: 90%;
  }*/
`;
const Button = ({ children, Click }) => {
  return <StyledButton onClick={Click}>{children}</StyledButton>;
};

export default Button;
