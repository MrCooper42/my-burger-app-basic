import React, {Component} from "react";
import {Aux} from "../../../higherOrderComponent/Auxillary/Auxillary";
import Button from "../../UI/Button/Button";

export class OrderSummery extends Component {
  // This could be a functional component
  componentWillUnmount() {
    console.log("[OrderSummary] WillUpdate");
  }
  
  render() {
    const ingredientSummery = Object.keys(this.props.ingredients)
      .map((key) => (
        <li key={key}>
          <span style={{textTransform: "capitalize"}}>{key}</span>: {this.props.ingredients[key]}
        </li>
      ));
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
          {ingredientSummery}
        </ul>
        <p><strong>Total Price: {this.props.price}</strong></p>
        <p>Continue to checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancled}>CANCEL</Button>
        <Button btnType="Success" clicked={this.props.purchaseContinue}>CONTINUE</Button>
      </Aux>
    );
  };
}
