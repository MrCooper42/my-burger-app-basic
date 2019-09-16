import React from "react";
import {Aux} from "../../../higherOrderComponent/Auxillary";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Modal.module.css";

const modal = (props) => {
  const {
    show,
    children,
    modalClosed
  } = props;
  
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
};

export default modal;
