import React from 'react'
import PropTypes from 'prop-types'


const Summary = props => ( 
    <div>
        <h2>summary value {props.title}</h2>
       <h1>{props.value}</h1>
    </div>
);

Summary.propTypes = {
    value: PropTypes.number.isRequired
};


export default Summary