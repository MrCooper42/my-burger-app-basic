import React, {Component} from "react";
import {Aux} from "../../higherOrderComponent/Auxillary";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Toolbar from "../Toolbar/Toolbar";
import classes from "./Layout.module.css";

export class Layout extends Component {
  state = {
    showSideDrawer: true,
  };
  
  sideDrawerClosedHandler = () => {
    this.setState(({showSideDrawer: false}));
  };
  
  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {
        showSideDrawer: !prevState.showSideDrawer,
      };
    });
  };
  
  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    );
  }
}
