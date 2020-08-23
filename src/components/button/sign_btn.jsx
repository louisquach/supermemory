import React from 'react'
import './sign_btn.scss'

const Button = ({name, type, onClick}) => {
    return (
        <div className="sign__btn">
            <button onClick={onClick} className='sign__btn-button' type={type}>{name}</button>
        </div>
    )
}

export default Button;