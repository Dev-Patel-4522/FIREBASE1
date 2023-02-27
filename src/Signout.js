import "./App.css";
import {useEffect, useState} from "react";
import {getAuth,onAuthStateChanged,signOut} from "firebase/auth";
import { app } from "./FireBase";
import Signup from "./Signup";
import Signin from "./Signin";

const auth = getAuth(app);

function SignOut(){
    const [user,setUser] = useState(null);
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                //Yes you are logged in
                setUser(user);
            }
            else{
                //user is logged out
                setUser(null);
            }
        });
    },[]);
    if(user === null){
        return(
            <div>
                <Signup />
                <Signin />
            </div>
        );
    }
    return (
      <>
        <div>
          <ul>
            <li><a href="default.html">Home</a></li>
            <li><a href="news.html">News</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="about.html">About</a></li>
            <li style={{ float: "right" }}><a href="/" onClick={() => signOut(auth)}> Logout</a>
            </li>
          </ul>
          <h1>Hello, {user.email}</h1>
        </div>
      </>
    );
}

export default SignOut;
