import React from "react"

const Button = ({ label, url, type }) => {

    return <div className={`button ${type}`}>
        <button>
            {label}
        </button>
    </div>
}

export default Button