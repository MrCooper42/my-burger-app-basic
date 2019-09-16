import React from "react";
import {Aux} from "../../../higherOrderComponent/Auxillary";
import Button from "../../UI/Button/Button";

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
      <p><strong>Total Price: {props.price}</strong></p>
      <p>Continue to checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancled}>CANCEL</Button>
      <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
    </Aux>
  );
};

export default orderSummery;
