import React from "react";
import classes from "./Input.module.css";

function Input(props) {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
      {/* the spread operator ensures that all the key value pairs that are received as props to the Input component are added as props to the input object */}
    </div>
  );
}

export default Input;
