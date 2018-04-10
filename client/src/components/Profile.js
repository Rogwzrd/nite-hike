import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import * as actionCreators from "../actions/actionCreators";
import {bindActionCreators} from "redux";
import { connect } from 'react-redux'
import { fetchUsers } from "../actions/actionCreators";
import PropTypes from 'prop-types'
import store from '../store'

class Profile extends Component{

    componentDidMount=()=>{
       const { dispatch } = this.props;
        console.log('component mounted');
        store.dispatch(fetchUsers())
    };

    render(){
        const { error, loading, users} = this.props;
        if  (error) {
            return <div>Error! {error.message} </div>
        }

        if (loading) {
            return <div>Loading...</div>
        }

        return(
            <ul>
                { users.map(user =>
                    <li key={user._id}>{user.name}</li>
                ) }
            </ul>
        )
    }
}

const mapStateToProps = state =>({
    users: state.userReducer.users,
    loading: state.userReducer.loading,
    error: state.userReducer.error

});

const mapDispatchToProps = dispatch =>{
    return bindActionCreators(actionCreators, dispatch);
};

Profile.propTypes = {
    error : PropTypes.string.isRequired,
    users : PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));