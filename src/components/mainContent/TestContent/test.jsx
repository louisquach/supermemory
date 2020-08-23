import React from 'react'
import './test.scss'
import {connect} from 'react-redux'
import {TestCard} from '../../Card/BackFace/CardBack'

const TestContent = ({display}) => {
    const [ranNum,setRanNum] = React.useState({display: 'none', 
                                            num:[{num:null},{num:null},{num:null},{num:null},{num:null}],
                                            correctAnswer:''})

    const [result,setResult] = React.useState({result:null})
    const [title,setTitle] = React.useState({title:''})
    const [startProps, setStartProps] = React.useState({
        animate:'turnaround ease-in-out 1s infinite',
        top:'10rem', 
        display: {startBtn: 'flex',startAgain:'none'}});

    function setRandomnumber() {
        const num1 = Math.floor(Math.random()*100) + 1;
        const num2 = Math.floor(Math.random()*100) + 1;
        const num3 = Math.floor(Math.random()*100) + 1;
        const num4 = Math.floor(Math.random()*100) + 1;
        const num5 = Math.floor(Math.random()*100) + 1;
        const correctAnswer = String(num1) + String(num2) +String(num3)+String(num4)+String(num5)
        console.log(correctAnswer);

        setRanNum({display:'flex',num:[{id:1,num:num1},{id:2,num:num2},{id:3,num:num3},{id:4,num:num4},{id:5,num:num5}],correctAnswer: correctAnswer});
    }
    function handleStartButton()  {
        setStartProps({animate:'none',top:'auto',display:{startBtn:'none',startAgain:'flex'}});
        setRandomnumber()
    }
    const handleChange = (e) => {
        const answer = e.target.value;
        setResult({result: answer});
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(result);
        var title = ''
        if (String(result.result) == String(ranNum.correctAnswer)) {
            title = "Answer is correct!";
        } 
        else { 
            title = "Answer is wrong!";
        }
        setTitle({title: title})
    }

    return (
        <div className='test__container' style={{display: `${display}`}}>
            <div className='test__container-card'>
                {
                    ranNum ? ranNum.num.map( n => 
                        <div className='test__container-backCard' style={{display: `${ranNum.display}`}}>
                            <TestCard num={n.num} key={n.id} style={{display:`${ranNum.display}`}}/>
                        </div>
                    ): null 
                }
                
            </div>
            <div className='test__container-form'>

                <div className='test__container-start' 
                        style={{animation: startProps.animate, top: startProps.top,display:startProps.display.startBtn}}>
                    <button className='test__form-btn start' onClick={handleStartButton}>Start</button>
                </div>
                
                <h2 className='test__result' style={ title.title === "Answer is correct!" ? {color: 'green'}: {color: 'red'}}>{title.title}</h2>
                <button onClick={setRandomnumber}
                    className='test__form-btn' 
                    style={{display:startProps.display.startAgain}}>Play</button>

                <div className='test__form'>
                    <input className='test__form-input' name='result' onChange={handleChange}/>
                    <button className='test__form-btn' onClick={handleSubmit}>Submit</button>
                </div>    
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    display: state.display.test
})

export default connect(mapStateToProps)(TestContent);