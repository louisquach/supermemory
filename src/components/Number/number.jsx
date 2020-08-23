import React from 'react'
import './number.scss'
import {connect} from 'react-redux'
import {Learn1, Learn2, Learn3, Learn4, Learn5, Learn6,Learn7,Learn8,Learn9,Learn10} from '../../redux/learnNumber/learnReducer'

const Number = ({learn1,learn2,learn3,learn4,learn5,learn6,learn7,learn8,learn9,learn10}) => {
    return (
        <div className="number__container">
            <div onClick={learn1} className="number__num"><span className='number'>1</span></div>
            <div onClick={learn2} className="number__num"><span className='number'>2</span></div>
            <div onClick={learn3} className="number__num"><span className='number'>3</span></div>
            <div onClick={learn4} className="number__num"><span className='number'>4</span></div>
            <div onClick={learn5} className="number__num"><span className='number'>5</span></div>
            <div onClick={learn6} className="number__num"><span className='number'>6</span></div>
            <div onClick={learn7} className="number__num"><span className='number'>7</span></div>
            <div onClick={learn8} className="number__num"><span className='number'>8</span></div>
            <div onClick={learn9} className="number__num"><span className='number'>9</span></div>
            <div onClick={learn10} className="number__num"><span className='number'>10</span></div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    learn1: () => dispatch(Learn1()),
    learn2: () => dispatch(Learn2()),
    learn3: () => dispatch(Learn3()),
    learn4: () => dispatch(Learn4()),
    learn5: () => dispatch(Learn5()),
    learn6: () => dispatch(Learn6()),
    learn7: () => dispatch(Learn7()),
    learn8: () => dispatch(Learn8()),
    learn9: () => dispatch(Learn9()),
    learn10: () => dispatch(Learn10()),

})
export default connect(null,mapDispatchToProps)(Number);