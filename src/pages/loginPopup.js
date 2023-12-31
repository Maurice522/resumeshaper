import React, { useEffect, useState } from 'react';
import { addUserInWaitlist, auth, getUserFromDatabase, getWaitlistFromDatabase } from '../fireabse';
import { loginUser, updateUser } from '../redux/slices/user';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addUserInDatabase } from '../fireabse';
import img3 from '../images/28.png'
import '../styleSheet/LoginPopup.css';
import { limitToLast } from 'firebase/firestore';
import { toast } from 'react-toastify';


const LoginPopup = ({ onClose, onSignup }) => {
    const [showSuccessToast, setShowSuccessToast] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [errorr, setErrorr] = useState("");
    const [msg, setMsg] = useState("");
    const [isLogin, setIsLogin] = useState(true);
    const [waitlist, setWaitlist] = useState([])
    const localuser = useSelector(state=> state.user)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const mapFirebaseErrorToMessage = (errorCode) => {
        switch (errorCode) {
            case 'auth/user-not-found':
                return 'User not found. Please check your email or sign up.';
            case 'auth/invalid-email':
                return 'Invalid email address. Please enter a valid email.';
            case 'auth/wrong-password':
                return 'Incorrect password. Please try again.';
            case 'auth/invalid-login-credentials':
                return 'Invalid Login Credentials'
            default:
                errorCode = errorCode.substring(5);
                errorCode = errorCode.charAt(0).toUpperCase() + errorCode.slice(1);
                return (errorCode);
        }
    };


    const handleToggleMode = () => {
        setIsLogin(!isLogin);
        setErrorr(null);
    };

    const getList = async()=>{
        var templist = await getWaitlistFromDatabase()
        setWaitlist(templist) 
        console.log(templist)
    }

    useEffect(()=>{
        getList()
    },[])
    // const submitHandler = async (e) => {
    //     e.preventDefault();
    //     if (isLogin) {
    //         signInWithEmailAndPassword(auth, email, password)
    //             .then(async (userCredential) => {

    //                 const user = await getUserFromDatabase(email)
    //                 dispatch(updateUser(user))
    //                 if(user.profile === true){
    //                     navigate("/dashboard")
    //                 }else{
    //                     navigate("/auth")
    //                 }
    //                 console.log(userCredential);
    //                 onClose();
    //             }).catch(err => {
    //                 console.log(err);
    //                 const userFriendlyErrorMessage = mapFirebaseErrorToMessage(err.code);
    //                 setErrorr(userFriendlyErrorMessage);
    //             })
    //     } else {
    //         createUserWithEmailAndPassword(auth, email, password)
    //             .then((userCredential) => {
    //                 addUserInDatabase({ email, password, name })
    //                 signInUser(auth, email, password)
    //                 dispatch(loginUser({ email, password, name }))
    //                 console.log(userCredential);
    //                 onClose();
    //             }).catch(err => {
    //                 console.log(err);
    //                 const userFriendlyErrorMessage = mapFirebaseErrorToMessage(err.code);
    //                 setErrorr(userFriendlyErrorMessage);
    //             })
    //     }

    // };

    const submitHandler = async (e)=>{
        e.preventDefault();
        let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,5}');
        if(email!==""){
            try{
                if(!regex.test(email)){
                    return setErrorr("Please enter a vaild email!")
                }
                if(waitlist.includes(email)){
                    return setErrorr("This email already exists!");
                }else{
                    await addUserInWaitlist(email);
                    setMsg("You have been added to the list.");
                    setEmail("");
                    setTimeout(()=>onClose(), 4000);
                }
            }catch(err){
                const userFriendlyErrorMessage = mapFirebaseErrorToMessage(err.code);
                setErrorr(userFriendlyErrorMessage);
            }
        }else{
            setErrorr("Enter your email please!")
        }
    }

    return (
        <div className="popup">
            <div className="popup-content">
                <h2 className='loginHeader'>
                    <img src={img3} className='popupImg' />
                    <span className="close" onClick={onClose}>&times;</span>
                    Join Waitlist</h2>
                <form onSubmit={submitHandler} className="loginForm">
                    <div className="form-group">
                        <label className='loginLabel'>Email:</label>
                        <input
                            type='email'
                            className='loginInput'

                            placeholder='Enter your email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    
                    {errorr && <p className="errorMsg">{errorr}</p>}
                    {msg && <p className="msg">{msg}</p>}
                    <div className="form-actions">
                        <button type="submit" className='loginNow'>Submit</button>
                        
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPopup;
