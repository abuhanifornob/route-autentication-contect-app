import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const AuthContext=createContext();
const auth=getAuth(app);

const UserContext = ({children}) => {
    const[user,setUser]=useState({displayname: "Abu Hanif Arnob"})
    const googleProvider=new GoogleAuthProvider();
    const userRegister=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const login=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const googleSinIn=()=>{
        return signInWithPopup(auth,googleProvider);
    }
    const logOut=()=>{
       return signOut(auth);
    }
    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            console.log("Auth State Change ",currentUser);

        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const authInfo={user,userRegister,login,logOut,googleSinIn};
    return (
        <AuthContext.Provider value={authInfo}>
          {children}
        </AuthContext.Provider>
    );
};

export default UserContext;