import React from 'react'
import './learn_content.scss'
import Card from '../../Card/card';
import Number from '../../Number/number';
import {connect} from 'react-redux'

const LearnContent = ({num,key,display}) => {
    console.log(num);
    return (
        <div className="learn__container" style={{display: `${display}`}}>
            <div className='learn__container-num'>
                {
                    num != null ? num.map( n => <Card num={n} key={key}/>) : null
                }
            </div>    
            <Number/>
        </div>
    )
}
const mapStateToProps = state => ({
    num: state.number[0].num,
    key: state.number[0].id,
    display: state.display.learn
})
export default connect(mapStateToProps)(LearnContent);