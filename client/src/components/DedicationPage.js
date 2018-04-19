import React , { Component }from 'react'
import { withRouter } from 'react-router-dom'
import man from '../images/man.png'
import woman from '../images/woman.png'
import BackgroundItems from "./BackgroundItems";

const styles ={
    main:{
        backgroundColor: '#CDCDCD80',
    },
    center: {
        display: 'flex',
        alignItems: 'center'
    },
    faces: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    roundedDiv: {
        borderRadius: "25px",
        backgroundColor: '#fff',
        padding: '30px'
    }
};

class DedicationPage extends Component{
    render(){
        return(
            <div style={styles.main} className={'container my-5'}>

                <div className={'row p-3'} style={styles.center}>
                    <div className={'col-12 col-md-6'}>
                        <p>This application is dedicated to the love of my life, Julia. You are an infinite source of <strong> care</strong> and <strong>affection</strong>. With you at my side, I have accomplished
                            so much. <strong>I love you</strong></p>
                    </div>
                    <div className={'col-12 col-md-6'} style={styles.faces}>
                        <div style={styles.roundedDiv}>
                            <img src={man} alt="man's face"/>
                            <img src={woman} alt="woman's face"/>
                        </div>
                    </div>
                </div>
                <BackgroundItems/>
            </div>
        )
    }
}

export default withRouter(DedicationPage)