import React from 'react'

const style = {
borderRadius: '5px'

}

const Login = (...props) =>(
    <div>
    <button style={style}>
        sign up
    </button>
    <button style={style}>
    login
    </button>
    </div>
)

export default Login;