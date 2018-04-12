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
        this.props.fetchUsers();
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
            <div className={"container"}>
                <div className={'row bg-light'}>
                    { users.map(user =>
                        <div className={'col-12 col-sm-6'} key={user._id}>{user.name}</div>
                    ) }
                </div>
            </div>
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
    users : PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.func
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));