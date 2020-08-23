import React from 'react'
import './CardFront.scss'

const FrontCard = ({num}) => {
    return (
        <div className='frontCard__container'>
            <h1 className='frontCard_detail'>{num}</h1>
        </div>
    )
}

export default FrontCard;