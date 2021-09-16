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
    background-color: green;
  }
`;
const Button = ({ children, Click }) => {
  return <StyledButton onClick={Click}>{children}</StyledButton>;
};

export default Button;
