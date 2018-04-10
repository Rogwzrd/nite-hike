import React from 'react'

const style = {
    borderRadius: '5px'

}

const LoginSpace = (...props) =>(
    <div>
        <button style={style}>
            sign up
        </button>
        <button style={style}>
            login
        </button>
    </div>
)

export default LoginSpace;