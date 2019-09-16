import React from "react";
import {Aux} from "../../../higherOrderComponent/Auxillary";

const orderSummery = (props) => {
  const ingredientSummery = Object.keys(props.ingredients)
    .map((key) => {
      return (
        <li key={key}>
          <span style={{textTransform: "capitalize"}}>{key}</span>: {props.ingredients[key]}
        </li>
      );
    });
  
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummery}
      </ul>
      <p>Continue to checkout?</p>
    </Aux>
  );
};

export default orderSummery;
