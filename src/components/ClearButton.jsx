import React from "react";
import "./ClearButton.css";

//this clears the screens by clearning the children/props like the number and operation buttons we have in app.js
export const ClearButton = (props) => (
  <div className="clear-btn">
    onClick={props.handleClear}
    {props.childrens}
  </div>
);
