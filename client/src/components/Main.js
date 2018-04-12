import React from 'react';
import '../App.css';
// import '../../node_modules/bootstrap/dist/css/bootstrap.css';
// import '../../node_modules/bootstrap/dist/css/bootstrap-grid.css';
// import '../../node_modules/bootstrap/dist/css/bootstrap-reboot.css';
import { connect } from 'react-redux'
import Header from './Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ButtonPage from './ButtonPage'
import Landing from './Landing'
import Profile from './Profile'
import Footer from './Footer'

let Main = () => (
    <Router>
        <div className="App">
            <Header/>
            <Route exact path={'/'} component={Landing}/>
            <Route exact path={'/buttons'} component={ButtonPage}/>
            <Route exace path={'/profile'} component={Profile} />
            <Footer/>
        </div>
    </Router>
)

export default connect()(Main);
