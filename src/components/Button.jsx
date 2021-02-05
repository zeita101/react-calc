import React from "react";
import "./Button.css";

//If the input is a number(not not a number - DOUBLE NEGATIVE) or a decimal or an equal sign, then return true

const isOperator = (val) => {
  return !isNaN(val) || val === "." || val === "=";
};

export const Button = (props) => (
  <div
    className={`button-wrapper ${
      isOperator(props.children) ? null : "operator"
    }`}
    onClick={() => props.handleClick(props.children)}
  >
    {props.children}
  </div>
);
