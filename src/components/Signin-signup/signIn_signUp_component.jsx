import React from 'react';
import Input from "../Input/input";
import './signIn_signUp_component.scss'
import Button from '../button/sign_btn';
import { googleSignIn, auth, createUserProfile} from '../../firebase/firebaseConfig';

export const SignInForm = () => {
    const [signIn, setSignIn] = React.useState({
        displayName: '',
        email: ''
    })

    const handleChange = (event) => {
        const {name, value} = event.target;
        setSignIn(prev => ({...prev,[name]:value}))
    }

    const handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = signIn;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            setSignIn({
                displayName: '',
                email: ''
            })
        } catch (error) {console.log(error); alert("There is a problem with sign in, please try again!")}
    }
    return (
        <div className="signIn">
            <h1 className="signIn__form">Sign In</h1>
            <h4 className="signin__form-h4">Already have account?</h4>
            <form className="signInForm" onSubmit={handleSubmit}>
                <Input name="email" type="email" placeholder="Your email" onChange={handleChange}/>
                <Input name="password" type="password" placeholder="Your password" onChange={handleChange}/>
                <div className="form__btn">
                    <Button name="Sign In" type='submit'/>
                    <Button name="Google Sign In" onClick={googleSignIn} type="button"/>
                </div>
            </form>
            
            
        </div>
    )
}

export const SignUpForm = () => {
    const [newUser, setNewUser] = React.useState({
        displayName: '',
        email: '',
        password:'',
        confirmPassword:''
    })

    const handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = newUser;
        if (password !== confirmPassword) { alert("Password does not match, please try again!"); return;}
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfile(user, {displayName});
            setNewUser({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch(err) {console.log(err);}


    }

    const handleChange = (event) => {
        const {value, name} = event.target;
        setNewUser(pre => ({...pre,[name]: value}));
    }
    return (
        <div className="signUp">
            <h1 className="signUp__form">Sign Up</h1>
            <h4 className="signin__form-h4">Don't have account?</h4>

            <form className="signUpForm" onSubmit={handleSubmit}>
                <Input name="displayName" type="text" onChange={handleChange} placeholder="Your full name"/>
                <Input name="email" type="email" placeholder="Your email" onChange={handleChange}/>
                <Input name="password" type="password" placeholder="Your password" onChange={handleChange}/>
                <Input name="confirmPassword" type="password" placeholder="Confirm your password" onChange={handleChange}/>
                <div className="form__btn">
                    <Button name="Sign Up" type="submit"/>
                </div>
            </form>
            

        </div>
    )
}