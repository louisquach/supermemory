import React from 'react'
import './CardBack.scss'



const BackCard = ({num}) => {

    return (
        <div className='backCard__container'>
            <img className="card_image" src={process.env.PUBLIC_URL + `/images/${num}.jpg`} alt="number item"/>
        </div>
    )
}

export const TestCard = ({num,key,display}) => {

    return (
        <div className='backCard__container-test' key={key} style={{display: `${display}`}}>
            <img className="card_image" src={process.env.PUBLIC_URL + `/images/${num}.jpg`} alt="number item"/>
        </div>
    )
}

export default BackCard;

