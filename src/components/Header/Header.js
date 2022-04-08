import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { AuthGContext } from '../../App';


const Header = () => {
    const [auth, provider] = useContext(AuthGContext);
    const [user1, setUser] = useState({});
    const signInHandler = () => {

        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                setUser(user);
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    return (
        <div>
            <h2>Welcome to TShirt Mania!!!</h2>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/orderreview">Order Review</Link>
                <Link to="/grandpa">GrandPa</Link>
            </nav>
            <button onClick={() => { signInHandler() }}>Google Sign in</button>
        </div>
    );
};

export default Header;