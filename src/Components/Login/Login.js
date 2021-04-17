import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import image from '../../images/google.png';
import './Login.css';
import { Card, Container, Button } from 'react-bootstrap';
const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const history = useHistory()
  const location = useLocation()
  let { from } = location.state || { from: { pathname: "/" } };



    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }



    const handleGoogleSignIn = () =>{
        var provider = new firebase.auth.GoogleAuthProvider();
    
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
      
          const { displayName, email } = result.user;
          const signedInUser = { name: displayName, email:email }
          setLoggedInUser(signedInUser);
          storeAuthToken()
          const user = result.user;
         console.log(user)
        }).catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode,errorMessage);
        });
    }
    
    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
          .then(function (idToken) {
              console.log(idToken)
            sessionStorage.setItem('token',idToken)
            history.replace(from);
          }).catch(function (error) {
            // Handle error
          });
      }






    return (
        <div className="App container">
            {/* <div className="from-group mt-5">
                <button onClick={handleGoogleSignIn} className="btn btn-brand">Google Sign in</button>
            </div> */}
            <Container className="mt-5 App login">
            <Card>
              <Card.Body className="cardBody">
               <h2 className="text-center mb-4 text-white">Log in!</h2>
               <Button id="button1" variant="dark" onClick={handleGoogleSignIn}>Sign in with google <img src={image} alt=""/>  </Button>
              </Card.Body>
            </Card>
            </Container>
        </div>
    );
};

export default Login;