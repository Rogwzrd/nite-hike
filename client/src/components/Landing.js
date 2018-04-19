import React from 'react'
import { withRouter } from 'react-router-dom'
import BackgroundItems from './BackgroundItems'

const styles = {
    main: {
        color: 'white',
        minWidth: '80%',
        minHeight: '80%',
        padding: '20px'
    },
    img: {
        maxWidth: '100%',
        height: 'auto',
    },
    sideText:{
        fontSize: "64px",
    }
};

const Landing = () =>(
    <div style={styles.main} className={'my-5'}>
        {/*<h1>Welcome to Night Hike</h1>*/}
        {/*<p>Let's plan your next trip to the stars</p>*/}
        <div className={'container'}>
            <div className={"row"}>
                <div style={styles.sideText} className="col-12 col-sm-6">
                    <p>Let's Plan your next trip to the stars!</p>
                    <a className={"btn btn-lg btn-primary"} href={"/profile"}>Get Started</a>
                </div>
                {/*<div className="col-12 col-sm-6">*/}
                {/*<img className={"img-thumbnail"} style={styles.img} src={'https://scontent.fatl1-1.fna.fbcdn.net/v/t1.0-9/23559559_10101871125012297_4066424741322196774_n.jpg?_nc_cat=0&oh=567c19f3eddc4934b68febf6f088c360&oe=5B6284E6'} alt={'couple'}/>*/}
                {/*</div>*/}
            </div>
        </div>
        <BackgroundItems/>
    </div>
);

export default withRouter(Landing);