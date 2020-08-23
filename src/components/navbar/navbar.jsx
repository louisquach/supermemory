import React from 'react'
import './navbar.scss'
import toggleAction from '../../redux/toggle/toggleReducer'
import {connect} from 'react-redux';
import ToggleNav from './navbar_hidden/hiddenNav';


const NavBar = ({dispatchToggleAction, hidden, user}) => {
    console.log(hidden);
    return (
        <div className='navbar_container'>
        {hidden ? <ToggleNav hidden/> : null}
            <div className="navbar_icon" onClick= {dispatchToggleAction}>
                <span className="nav__user">
                { 
                    user ? ( user.displayName ? <h5>{user.displayName.slice(0,1)}</h5> : <h5>Hi</h5>)
                     : <img src={process.env.PUBLIC_URL + 'images/user.png'} alt='user icon'></img>
                }
                </span>
            </div>
        </div>

    )
}
const mapDispatchToProps = dispatch => ({
    dispatchToggleAction : () => dispatch(toggleAction())
})

const mapStateToProps = state => ({
    hidden : state.hidden.hidden,
    user: state.user.currentUser
})
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);