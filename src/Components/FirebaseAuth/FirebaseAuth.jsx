import React from "react";
import { useState, useEffect } from 'react'
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import { auth } from "../../FirebaseConfig.js";
// import {onAuthStateChanged} from 'firebase/auth'

function FirebaseAuth() {
    const [currentUser, setCurrentUser] = useState({email:""})
    useEffect(() => {
        const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);

        ui.start('#firebaseui-auth-container', {
            callbacks: {
                signInSuccessWithAuthResult: function(authResult, redirectUrl) {
                    alert("Sign in successful")
                },
                // uiShown: function() {
                //     // This is what should happen when the form is full loaded. In this example, I hide the loader element.
                //     document.getElementById('loader')!.style.display = 'none';
                // }
            },
            signInSuccessUrl: 'https://127.0.0.1:3000', // This is where should redirect if the sign in is successful.
            signInOptions: [ // This array contains all the ways an user can authenticate in your application. For this example, is only by email.
                {
                    provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                    requireDisplayName: true,
                    disableSignUp: {
                        status: true
                    }
                }
            ],
            tosUrl: 'https://www.example.com/terms-conditions', // URL to you terms and conditions.
            privacyPolicyUrl: function() { // URL to your privacy policy
                window.location.assign('https://www.example.com/privacy-policy');
            }
        });
    }, []);

    // useEffect(() => {
    //     onAuthStateChanged(firebase.auth(), (user) => {
    //         if(currentUser) {
    //             setCurrentUser({email: currentUser.email})
    //         } else {
    //             setCurrentUser({})
    //         }
    //     })
    // }, [])
    

    return (
        <>
            <div className="firebase-auth-main">
                <h1 className="text-center my-3 title">Login Page</h1>
                <div id="firebaseui-auth-container"></div>
                {currentUser && <button onClick={() => {firebase.auth().signOut(); setCurrentUser({})}}>Sign Out</button>}
            </div>
        </>
    )
}

export default FirebaseAuth;
