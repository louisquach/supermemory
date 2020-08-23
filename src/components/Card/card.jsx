import React from 'react'
import './card.scss'
import FrontCard from './FronFace/CardFront';
import BackCard from './BackFace/CardBack';



const Card = ({num,key}) => {
    return (
        <div className='card__container'>
            <FrontCard num={num} key={key}/>
            <BackCard num={num} key={key}/>
        </div>
    )
}

export default Card;