import React from 'react'
import moon from '../images/moonbg.png'
import mountains from '../images/mountains.png'

const styles = {
    mountains:{
        position: 'fixed',
        bottom: '10px',
        right: '5%',
        height: 'auto',
        width: '45%',
        zIndex: '-1',
    },
    moon: {
        position: 'fixed',
        top: '15%',
        right: '20%',
        height: 'auto',
        width: '15%',
        zIndex: '-1'
    }
};
const BackgroundItems = props => (
    <div>
        <img style={styles.moon} src={moon} alt=""/>
        <img style={styles.mountains} src={mountains} alt=""/>
    </div>
);

export default BackgroundItems;
