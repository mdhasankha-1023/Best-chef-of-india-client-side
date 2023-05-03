import React, { createContext, useState } from 'react';
import app from '../utils/firebase/fiebase.config';
import { GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth";


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

    const authInfo = {
        user,
        signInWithGoogle,
        signInWithGithub
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;