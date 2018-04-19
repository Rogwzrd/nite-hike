import React from 'react'
import LoginSpace from './LoginSpace'
import moonBootLogo from '../images/moonBootLogo.png'
import { Link } from 'react-router-dom'

const styles = {
    main:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'slateGrey',
        padding: '5px 20px',
    },
    logoDiv:{
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        fontWeight: '700',
    },
    moon: {
        height: '60px',
        width: 'auto'
    },
    logoText:{
        margin: "0",
        leftPadding: "5px"
    }

};
const Header = () =>(
    <nav style={styles.main} className={"navbar navbar-light bg-light"}>
        <div style={styles.logoDiv}>
            <Link classname={'navbar-brand'} to={'/'}>
                <img style={styles.moon} src={moonBootLogo} alt={'moon'}/>
                Night Hike
            </Link>
        </div>
        {/*<div className={"btn-group"} role="group" aria-label="Basic example">*/}
                {/*<Link to={"/profile"}>*/}
                    {/*<button type="button" className="btn btn-secondary">*/}
                        {/*Profile*/}
                    {/*</button>*/}
                {/*</Link>*/}
            {/*<Link to={"/events"}>*/}
                {/*<button type="button" className="btn btn-secondary">*/}
                    {/*Events*/}
                {/*</button>*/}
            {/*</Link>*/}
        {/*</div>*/}
        <LoginSpace/>
    </nav>
);

export default Header;