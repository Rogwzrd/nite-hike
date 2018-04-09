import React from 'react'
import Login from './Login'
import svgMoon from '../images/moon.svg'

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
        fontWeight: '700'
    },
    moon: {
        height: '20px',
        width: '20px'
    }

}
const Header = (...props) =>(
    <header style={styles.main}>
        <div style={styles.logoDiv}>
            <img style={styles.moon} src={svgMoon} alt={'moon'} className='App-logo'/>
            <p>Night Hike</p>
        </div>
        <Login/>
    </header>
)

export default Header;