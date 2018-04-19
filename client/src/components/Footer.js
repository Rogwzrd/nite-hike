import React from 'react'
import {Link} from 'react-router-dom'

const styles = {
    main: {
        position: 'fixed',
        bottom: '0',
        background: 'slateGrey',
        width: '100%',
        padding: '10px'

    }
};

const Footer = () =>(

    <div style={styles.main}>
        <div className="container">
            <div className="row">
                <div className={"col-12 col-md-4"}>copyright &copy; 2018</div>
                <div className={"col-12 col-md-4"}>Created by Mike Daye</div>
                <Link className={"col-12 col-md-4"} to={'/dedication'}>Dedications</Link>
            </div>
        </div>
    </div>
)

export default Footer