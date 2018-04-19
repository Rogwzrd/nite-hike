import React, {Component} from 'react'

const styles = {
    margin: "2px"
};

class LoginSpace extends Component {
    render() {
        return (
            <div>
                <button style={styles} className={"btn btn-outline-primary"}>
                    sign up
                </button>
                <button style={styles} className={"btn btn-outline-success"}>
                    login
                </button>
            </div>
        )
    }
}

export default LoginSpace;