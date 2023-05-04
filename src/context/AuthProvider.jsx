import React, { createContext, useEffect, useState } from 'react';
import app from '../utils/firebase/fiebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";


export const AuthContext = createContext(app)

const auth = getAuth()
const provider = new GoogleAuthProvider()



const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    // google
    const signInWithGoogle = () => {
       return signInWithPopup(auth, provider)
    }
    // Github
    const signInWithGithub = () => {
       return signInWithPopup(auth, provider)
    }

    // sign up
    const signUp = (email, password) => {
       return  createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in
    const signIn = (email, password) => {
     return signInWithEmailAndPassword(auth, email, password)
    }

    // find current user
    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
       return () =>  {
        unSubscribe()
       }
    } , [])

    // user log out
    const logOut = () => {
        return signOut(auth)
    }

    // fetch chef info data
    

    const authInfo = {
        user,
        signInWithGoogle,
        signInWithGithub,
        signUp,
        signIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;