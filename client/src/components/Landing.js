import React from 'react'
import { withRouter } from 'react-router-dom'

const style = {
    color: 'black',
    backgroundColor: '#F8F8F880',
    minWidth: '80%',
    minHeight: '80%',
    margin: '10%'

}

const Landing = () =>(
    <div style={style}>
    <h1>Welcome to Night Hike</h1>
    <p>Let's plan your next trip to the stars</p>
    </div>
)

export default withRouter(Landing);