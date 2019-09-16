import React from "react";
import {Aux} from "../../higherOrderComponent/Auxillary";
import Toolbar from "../Toolbar/Toolbar";
import classes from "./Layout.module.css";

export const Layout = (props) => (
  <Aux>
    <Toolbar/>
    <main className={classes.Content}>
      {props.children}
    </main>
  </Aux>
);
