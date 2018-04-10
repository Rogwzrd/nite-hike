import React from 'react';
import '../App.css';
import { connect } from 'react-redux'
import Header from './Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ButtonPage from './ButtonPage'
import Landing from './Landing'
import Profile from './Profile'

let Main = ({ ...props}) => (
          <Router>
            <div className="App">
            <Header/>
            <Route exact path={'/'} component={Landing}/>
            <Route exact path={'/buttons'} component={ButtonPage}/>
            <Route exace path-={'/profile'} component={Profile} />
            </div>
          </Router>
)

export default connect()(Main);
