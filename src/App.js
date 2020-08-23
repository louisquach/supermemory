import React from 'react';
import SignInSignUp from './pages/signin_signup-page/SignInSignUp_page';
import {Switch, Route, Redirect} from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import { auth, createUserProfile } from './firebase/firebaseConfig';
import { catchUser } from './redux/user/userReducer';
import {connect} from 'react-redux';

function App(props) {
  const [detectUser, setDetectUser] = React.useState(null);
  const {catchUser, checkUser} = props

  React.useEffect( () => {
    setDetectUser( () => {auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot( snapshot => {
          catchUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      }
      catchUser(userAuth);
    });
    });
    setDetectUser();
  },[])

  return (
    <div>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path="/signin" render={ () => checkUser ? <Redirect to='/'/> : <SignInSignUp/>}/>
        </Switch>
    </div>
  );
}

const dispatchStateToProps = dispatch => ({
  catchUser: user => dispatch(catchUser(user))
})
const mapStateToProps = state => ({
  checkUser: state.user.currentUser
})
export default connect(mapStateToProps,dispatchStateToProps)(App);
