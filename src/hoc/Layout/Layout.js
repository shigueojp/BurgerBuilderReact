import React, { Component } from "react";
import Aux from "../Aux";
import classes from "../Layout/Layout";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

//Return com array
//Return usando uma div pai
//Return usando um Aux
class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  drawerToggleClicked = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer};
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.drawerToggleClicked}/>
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.drawerToggleClicked}
        />
        <main style={{marginTop: '80px'}} className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
