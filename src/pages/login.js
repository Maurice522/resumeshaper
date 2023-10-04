import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth, getUserFromDatabase } from '../fireabse';
import { loginUser } from '../redux/slices/user';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Login=()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const submitHandler = async(e)=>{
        e.preventDefault();
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
  return (
    <>
    <h1>login</h1>
    <form onSubmit = {submitHandler}>
        <input
            type='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
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

export default Login;