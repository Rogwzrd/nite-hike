import React from 'react';
import '../App.css';
import { connect } from 'react-redux'
import Header from './Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ButtonPage from './ButtonPage'
import Landing from './Landing'
import Profile from './Profile'
import Footer from './Footer'
import EventsPage from "./EventsPage";
import DedicationPage from "./DedicationPage";

let Main = () => (
    <Router>
        <div className="App">
            <Header/>
            <Route exact path={'/'} component={Landing}/>
            <Route exact path={'/buttons'} component={ButtonPage}/>
            <Route exace path={'/profile'} component={Profile} />
            <Route exace path={'/events'} component={EventsPage} />
            <Route exace path={'/dedication'} component={DedicationPage} />
            <Footer/>
        </div>
    </Router>
)

export default connect()(Main);
