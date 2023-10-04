import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { addUserInDatabase, auth, getUserFromDatabase } from '../fireabse';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/slices/user';
import { useNavigate } from 'react-router-dom';


const Signup=()=>{
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const signInUser = (auth, email, password)=>{
        signInWithEmailAndPassword(auth, email, password)
            .then(async(userCredential)=>{
                const user = await getUserFromDatabase(email)
                dispatch(loginUser(user))
                navigate("/auth")
                console.log(userCredential);
            }).catch(err=>{
                console.log(err);
            })
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential)=>{
                addUserInDatabase({email,password, name})
                signInUser(auth, email, password)
                console.log(userCredential);
            }).catch(err=>{
                console.log(err);
            })
    }
  return (
    <>
    <h1>Signup</h1>
    <form onSubmit = {submitHandler}>
        <input
            type='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
        />
        <input
            type='name'
            placeholder='Enter your name'
            value={name}
            onChange={(e)=>setName(e.target.value)}
        />
        <input
            type='password'
            placeholder='Enter your password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
        />
        <button type='submit'> Submit </button>
    </form>
    </>
  )
}

export default Signup;