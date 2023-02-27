import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup, } from "firebase/auth";
import { app } from "./FireBase";
import './App.css';

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

function Signin() {
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const signinuser = () => {
        signInWithEmailAndPassword(auth,email,password)
        .then((value) => alert("Sign In Success"))
        .catch((err) => console.log(err));
    };
    const signinWithGoogle = () => {
      signInWithPopup(auth, googleProvider)
      .then((value) => alert("Sign In Success"))
    };
    return (
      <div className="signin-page">
        <h1>Sign In page</h1>
        <label>Enter Email: </label><br />
        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Enter Email"/><br />
        <label>Enter Password: </label><br />
        <input onChange={(e) => setpassword(e.target.value)} value={password} type="password" required
          placeholder="Your Password"/><br />
        <button onClick={signinuser} className="button-85"> Sign In </button> <br/>
        <button onClick={signinWithGoogle} className="button-85"> Sign In with Gooogle </button>
      </div>
    );
}
export default Signin;