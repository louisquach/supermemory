import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyC-nxjZEJDkSfPuof_2kLE5Cf3RuF8cwx8",
    authDomain: "memory-training-d882f.firebaseapp.com",
    databaseURL: "https://memory-training-d882f.firebaseio.com",
    projectId: "memory-training-d882f",
    storageBucket: "memory-training-d882f.appspot.com",
    messagingSenderId: "918290049455",
    appId: "1:918290049455:web:64197bea9143b5023ae75a",
    measurementId: "G-ME5QRZ6R6W"
  };
  // Initialize Firebase

firebase.initializeApp(firebaseConfig);
console.log(firebase.app().name);
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account'});

export const createUserProfile = async (userAuth) => {
  if (!userAuth) return;
  const userProfile = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = userProfile.get();
  console.log(snapshot);

  if (!(await snapshot).exists) {
    const {displayName, email} = userAuth;
    const createAt = new Date();

    try {
      await userProfile.set({
        displayName,
        email, 
        createAt
      })
    } catch(err) {console.log('There is an error', err.message);}
  }
  return userProfile;
};


export const googleSignIn = () => auth.signInWithPopup(provider);
export const googleSignOut = () => auth.signOut().then( () => console.log("user has signed out!")).catch( err => console.log(err))
export default firebase;

