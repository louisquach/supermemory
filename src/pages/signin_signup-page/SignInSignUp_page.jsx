import React from 'react';
import "./SignInSignUp_page.scss"
import {SignInForm, SignUpForm} from '../../components/Signin-signup/signIn_signUp_component'

const SignInSignUp = () => {
    return (
        <div className="sign_container">
            <SignInForm/>
            <SignUpForm/>
        </div>
    )
}

export default SignInSignUp;