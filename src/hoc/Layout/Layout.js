import React, { Component } from "react";
import Aux from "../Aux";
import classes from "../Layout/Layout";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

import { connect } from 'react-redux'

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
        <Toolbar 
        drawerToggleClicked={this.drawerToggleClicked}
        isAuth={this.props.isAuthenticated}
        />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.drawerToggleClicked}
          isAuth={this.props.isAuthenticated}
        />
        <main style={{marginTop: '80px'}} className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

export default connect(mapStateToProps)(Layout);
