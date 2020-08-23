import React from 'react'
import './hiddenNav.scss'
import { googleSignOut } from '../../../firebase/firebaseConfig';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import toggleAction from '../../../redux/toggle/toggleReducer';

const ToggleNav = ({hidden, dispatchToggle, currentUser}) => {
    const handleSignOut = () => {
        googleSignOut();
        dispatchToggle();
    }
    return (
        <div className='navbar_detail' style={hidden ? {width: "auto"}: null}>
        { currentUser ?  <div className='navbar_detail-signOut' onClick={handleSignOut}><h4>Sign Out</h4></div>
            :<div className='navbar_detail-signIn' onClick={dispatchToggle}><Link to="/signin"><h4>Sign In</h4></Link></div>
        }
        </div>
    )
}

const dispatchStateTopProps = dispatch => ({
    dispatchToggle: () => dispatch(toggleAction()) 
})
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})
export default connect(mapStateToProps, dispatchStateTopProps)(ToggleNav);