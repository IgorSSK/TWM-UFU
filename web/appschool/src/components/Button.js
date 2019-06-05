import React from 'react'

const Button = ({ btnText }) => {
    return (
        <div className="btn-primary container">
            <button className="btn-primary button">
                <text className="btn-primary text">{ btnText }</text>
            </button>
        </div>
    )
}

export default Button