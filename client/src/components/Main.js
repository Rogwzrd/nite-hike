import React from 'react';
import '../App.css';
import { connect } from 'react-redux'
import Header from './Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ButtonPage from './ButtonPage'
import Landing from './Landing'

let Main = ({ ...props}) => (
          <Router>
            <div className="App">
            <Header/>
            <Route exact path={'/'} component={Landing}/>
            <Route exact path={'/buttons'} component={ButtonPage}/>
            </div>
          </Router>
)

export default connect()(Main);
