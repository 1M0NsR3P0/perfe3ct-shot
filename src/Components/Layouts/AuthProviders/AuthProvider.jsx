import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import apps from '../../Firebase/firebase.config';
// import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import axios from 'axios';

export const ProvideAuth = createContext(null)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth = getAuth(apps)

// auth provider
const AuthProvider = ({ children }) => {
  const [err, setErr] = useState("")
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true) // New loading state
  // const location = useLocation()
  // const from = location?.state?.from?.pathname || '/'
  // const navigate = useNavigate(null)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const login = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider)
  }

  const githubLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, githubProvider)
  }

  const update = (name, url) => {
    updateProfile(auth.currentUser, {
      displayName: name ? name : null,
      photoURL: url ? url : null,
    })
    setLoading(false)
    // navigate(from)
  }

  const logout = () => {
    setLoading(true)
    signOut(auth)
    // navigate('/')
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      // jwt request
      if(currentUser){
        axios.post('http://localhost:5000/jwt',{
          email:currentUser?.email || 'null'
        
        })
        .then(data=>{
          // console.log(data)
          localStorage.setItem('access-token',data.data.token)
        })
      }
        else{
          localStorage.removeItem('access-token')
        }
      setLoading(false)
    });
    return () => {
      unsubscribe()
    }
  }, [])

  // console.log(user)
  const info = {
    user,
    createUser,
    login,
    logout,
    userLoading: loading, // Update the loading state variable
    googleLogin,
    githubLogin,
    update,
    err
  }

  return (
    <ProvideAuth.Provider value={info}>
      {loading ? <Loading /> : children} {/* Display loading state */}
    </ProvideAuth.Provider>
  );
};

export default AuthProvider;
