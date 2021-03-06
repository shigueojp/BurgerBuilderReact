import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../store/actions/auth'
import { Redirect } from 'react-router-dom'

class Logout extends Component {
    componentDidMount () {
        this.props.onLogout();
    }
    
    render() {
        return (
            <Redirect to="/"></Redirect>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => dispatch(actions.logout())
    }
}
export default connect(null, mapDispatchToProps)(Logout)