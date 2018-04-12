import React from 'react'

const styles = {
    main: {
        position: 'fixed',
        bottom: '0',
        background: 'slateGrey',
        width: '100%',
        padding: '20px'

    }
};

const Footer = () =>(

    <div style={styles.main}>
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6">copyright &copy; 2018</div>
                <div className="col-12 col-md-6">Created by Mike Daye</div>
            </div>
        </div>
    </div>
)

export default Footer