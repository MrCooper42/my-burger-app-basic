import React from "react";
import {Aux} from "../../higherOrderComponent/Auxillary";
import classes from "./Layout.module.css";

export const Layout = (props) => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>
      {props.children}
    </main>
  </Aux>
);
