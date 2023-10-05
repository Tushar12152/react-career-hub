import {  createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/Firebase.config";

export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
   
    const googleProvider=new GoogleAuthProvider()

    const createUser=(email,password)=>{
         return  createUserWithEmailAndPassword(auth,email,password) 
    }
    const LogIn=(email,password)=>{
        return  signInWithEmailAndPassword(auth,email,password)
    }
    const googleSignIn=()=>{
      return  signInWithPopup(auth,googleProvider)
    }

    const logOut=()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,(user)=>{
                 setUser(user)
        })
        return ()=>{
            unSubscribe()
        }
    },[])


    
    const authInfo={
      createUser,
     googleSignIn,
     user,
      LogIn,
      logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
              {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes={
    children:PropTypes.node.isRequired
}
export default AuthProvider;