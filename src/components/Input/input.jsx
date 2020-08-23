import React from 'react';
import "./input.scss"

const Input = (props) => {
    const {name, placeholder, onChange, type,...otherprops} = props;
    return (
        <div className="input__container">
            <label>{placeholder}</label> 
            <input onChange={onChange} type={type} className='input__container-input' name={name} {...otherprops} placeholder={placeholder} required/>
        </div>
    )
}

export default Input;