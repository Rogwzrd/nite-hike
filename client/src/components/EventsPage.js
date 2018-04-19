import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import * as actionCreators from "../actions/actionCreators";
import {bindActionCreators} from "redux";
import { connect } from 'react-redux'
import Event from './Event'
import PropTypes from 'prop-types'

class EventsPage extends Component{

    componentDidMount=()=>{
        this.props.fetchEvents();
    };

    render(){
        const { error, loading, events} = this.props;
        if  (error) {
            return <div>Error! {error.message} </div>
        }

        if (loading) {
            return <div>Loading...</div>
        }

        return(
            <div className={"container"}>
                <div className={'row bg-light'}>
                    { events.map(event =>
                        <Event key={event._id} name={event.name} location={event.location} time={event.time} id={event._id}/>
                    ) }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    events: state.eventsReducer.events,
    loading: state.eventsReducer.loading,
    error: state.eventsReducer.error

});

const mapDispatchToProps = dispatch =>{
    return bindActionCreators(actionCreators, dispatch);
};

EventsPage.propTypes = {
    events : PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventsPage));

