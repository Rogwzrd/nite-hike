import React from 'react'
import PropTypes from 'prop-types'

const Event =(props) => (
    <div className={'col-12 col-sm-6'}>
        <label htmlFor="">name: </label>
        <div>{props.name}</div>
        <label htmlFor="">location: </label>
        <div>{props.location}</div>
        <label htmlFor="">time: </label>
        <div>{props.time}</div>
        <label htmlFor="">id: </label>
        <div>{props.id}</div>
    </div>
);

Event.propTypes = {
    name : PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

export  default Event;
