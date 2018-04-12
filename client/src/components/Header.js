import React from 'react'
import Login from './LoginSpace'
import svgMoon from '../images/moon.svg'
import { Link } from 'react-router-dom'

const styles = {
    main:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '50px',
        background: 'slateGrey',
        padding: '0 20px',
        boxShadow: '0 3px 6px rgba(256,256,256,0.16), 0 3px 6px rgba(256,256,256,0.23)'
    },
    logoDiv:{
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        fontWeight: '700',
    },
    moon: {
        height: '20px',
        width: '20px'
    },
    logoText:{
        margin: "0",
        leftPadding: "5px"
    }

};
const Header = () =>(
    <header style={styles.main}>
        <div style={styles.logoDiv}>
            <img style={styles.moon} src={svgMoon} alt={'moon'} className='App-logo'/>
            <Link to={'/'}>
                <p style={styles.logoText}>Night Hike</p>
            </Link>
        </div>
        <div className={"btn-group"} role="group" aria-label="Basic example">
                <Link to={"/profile"}>
                    <button type="button" className="btn btn-secondary">
                        Profile
                    </button>
                </Link>
            <Link to={"/buttons"}>
                <button type="button" className="btn btn-secondary">
                    buttons
                </button>
            </Link>
        </div>
        <Login/>
    </header>
);

export default Header;