import React from 'react'
import { withRouter } from 'react-router-dom'

const styles = {
    main: {
        color: 'black',
        backgroundColor: '#F8F8F880',
        minWidth: '80%',
        minHeight: '80%',
        margin: '10%',
        padding: '20px'
    },
    img: {
        maxWidth: '100%',
        height: 'auto',
    }
};

const Landing = () =>(
    <div style={styles.main}>
    <h1>Welcome to Night Hike</h1>
    <p>Let's plan your next trip to the stars</p>
        <div className={'container'}>
            <div className={"row"}>
                <div className="col-12 col-sm-6">
                    The goal of this application is to help you and others get outside and try new things. Whether they
                    are outside or inside, day or night.
                </div>
                <div className="col-12 col-sm-6">
                    <img style={styles.img} src={'https://scontent.fatl1-1.fna.fbcdn.net/v/t1.0-9/23559559_10101871125012297_4066424741322196774_n.jpg?_nc_cat=0&oh=567c19f3eddc4934b68febf6f088c360&oe=5B6284E6'}/>
                </div>
            </div>
        </div>
    </div>
)

export default withRouter(Landing);