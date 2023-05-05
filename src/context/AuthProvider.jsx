import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import app from '../utils/firebase/firebase.config';
import { toast } from 'react-toastify';


export const AuthContext = createContext(app)

const auth = getAuth()
const provider = new GoogleAuthProvider()



const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // google
    const signInWithGoogle = () => {
        setLoading(true)
       return signInWithPopup(auth, provider)
    }
    // Github
    const signInWithGithub = () => {
        setLoading(true)
       return signInWithPopup(auth, provider)
    }

    // sign up
    const signUp = (email, password) => {
        setLoading(true)
       return  createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in
    const signIn = (email, password) => {
        setLoading(true)
     return signInWithEmailAndPassword(auth, email, password)
    }

    // find current user
    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
       return () =>  {
        unSubscribe()
       }
    } , [])

    // user log out
    const logOut = () => {
        return signOut(auth)
    }

    // handle error toast
    const handleError = (message) => {
        toast.error(message)
    }

    // handle success toast
    const handleSuccess = () => {
        toast.success('success') 
    }

    

    const authInfo = {
        user,
        signInWithGoogle,
        signInWithGithub,
        signUp,
        signIn,
        logOut,
        handleError,
        handleSuccess,
        loading

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;