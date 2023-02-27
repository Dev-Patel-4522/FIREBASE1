import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, } from "firebase/auth";
import logupback from './Images/logupback.jpg';
import { app } from "./FireBase";

          const auth = getAuth(app);
          const googleProvider = new GoogleAuthProvider();

function Signup() {
          const [email,setEmail] = useState("");
          const [password,setPassword] = useState("");
          const createUser = () => {
            createUserWithEmailAndPassword(auth, email, password).then(
              (value) => alert("Sign Up Success")
            );
          };
          const signupWithGoogle = () => {
            signInWithPopup(auth, googleProvider)
            .then((value) => alert("Sign Up Success"))
          };
          
  return (
    <>
      <img src={logupback} alt="" />
      <div className="signup-page">
        <h1>Sign Up Page</h1>
        <label>Email: </label> <br />
        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" required placeholder="Enter Email" /> <br />
        <label>Password: </label> <br />
        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" 
          required 
          placeholder="Enter Password"
          class="input-text"
          id="password"
        />
        <span id="show-pass" class="fa fa-eye" title="show hide password"></span> <br />
        <button onClick={createUser} className="button-85"> Sign Up </button> <br />
        <button onClick={signupWithGoogle} className="button-85"> Sign Up with Gooogle </button>
      </div>
    </>
  );
}

export default Signup;