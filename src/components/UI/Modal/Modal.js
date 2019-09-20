import React, {Component} from "react";
import {Aux} from "../../../higherOrderComponent/Auxillary/Auxillary";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Modal.module.css";

export class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return nextProps.show !== this.props.show;
  }
  
  componentWillUpdate() {
    console.log('[Modal] WillUpdate')
  }
  
  render() {
    const {
      show,
      children,
      modalClosed,
    } = this.props;
    
    return (
      <Aux>
        <Backdrop show={show} clicked={modalClosed}/>
        <div
          className={classes.Modal}
          style={{
            transform: show ? "translateY(0)" : "translateY(-100vh)",
            opacity: show ? "1" : "0",
          }}
        >
          {children}
        </div>
      </Aux>
    );
  }
  ;
}
