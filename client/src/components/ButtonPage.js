import React from 'react';
import Button from '../components/Button'
import Summary from '../components/Summary'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

const ButtonPage = (props)=>{
    console.log(props)
    return(
            <div>
                <Button title={"incerement up"} onClick={props.incrementReduc}/>
                <Button title={"decrement down"} onClick={props.decrementReduc}/>
                <br/>
                <div style={{background: 'grey'}}>
                    <Summary title="number" value={props.points}/>
                    <Summary title="amount of clicks" value={props.clicks}/>
              </div>
            </div>
)
}


const mapStateToProps = state =>{
    return ({
        points: state.mathApp.points,
        clicks: state.mathApp.clicks,
    })
}
  
const mapDispatchToProps = dispatch =>{
    return bindActionCreators(actionCreators, dispatch);
}

  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ButtonPage));