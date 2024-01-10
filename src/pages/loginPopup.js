<<<<<<< HEAD
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
=======
import React, { useState, useEffect } from "react";
import { auth, getUserFromDatabase } from "../fireabse";
import { loginUser, updateUser } from "../redux/slices/user";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addUserInDatabase } from "../fireabse";
import img3 from "../images/28.png";
import "../styleSheet/LoginPopup.css";
import { limitToLast } from "firebase/firestore";
import emailjs from "@emailjs/browser";
>>>>>>> 9283bed21a1f8738dc43be797b138c3ab30a0eab

function generate(n) {
  var add = 1,
    max = 12 - add;
  if (n > max) {
    return generate(max) + generate(n - max);
  }
  max = Math.pow(10, n + add);
  var min = max / 10;
  var number = Math.floor(Math.random() * (max - min + 1)) + min;

  return ("" + number).substring(add);
}

const LoginPopup = ({ onClose, onSignup }) => {
<<<<<<< HEAD
    const [showSuccessToast, setShowSuccessToast] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [errorr, setErrorr] = useState("");
    const [msg, setMsg] = useState("");
    const [isLogin, setIsLogin] = useState(true);
    const [waitlist, setWaitlist] = useState([])
    const localuser = useSelector(state=> state.user)
=======
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [getOtp, setGetOtp] = useState(false);
  const [otp, setOtp] = useState("");
  // const [otpCreated, setOtpCreated] = useState();
  const [originalOTP, setOriginalOTP] = useState("");
  const [errorr, setErrorr] = useState("");
  const [msg, setMsg] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const localuser = useSelector((state) => state.user);
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(30);
>>>>>>> 9283bed21a1f8738dc43be797b138c3ab30a0eab

  const dispatch = useDispatch();
  const navigate = useNavigate();

<<<<<<< HEAD
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
=======
  const mapFirebaseErrorToMessage = (errorCode) => {
    switch (errorCode) {
      case "auth/user-not-found":
        return "User not found. Please check your email or sign up.";
      case "auth/invalid-email":
        return "Invalid email address. Please enter a valid email.";
      case "auth/wrong-password":
        return "Incorrect password. Please try again.";
      case "auth/invalid-login-credentials":
        return "Invalid Login Credentials";
      default:
        errorCode = errorCode.substring(5);
        errorCode = errorCode.charAt(0).toUpperCase() + errorCode.slice(1);
        return errorCode;
>>>>>>> 9283bed21a1f8738dc43be797b138c3ab30a0eab
    }
  };

<<<<<<< HEAD
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
=======
  const handleToggleMode = () => {
    setIsLogin(!isLogin);
    setErrorr(null);
  };

  const signInUser = (auth, email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = await getUserFromDatabase(email);
        dispatch(updateUser(user));
        if (user.profile === true) {
          navigate("/dashboard");
        } else {
          navigate("/auth");
        }
        console.log(userCredential);
      })
      .catch((err) => {
        console.log(err);
        const userFriendlyErrorMessage = mapFirebaseErrorToMessage(err.code);
        setErrorr(userFriendlyErrorMessage);
      });
  };

  const resendOTP = async (e) => {
    e.preventDefault();
    const tempotp = generate(6);
    console.log(tempotp);
    const message = `Your OTP for Resume Shapers is ${tempotp}.`;
    var templateParams = {
      to_name: name,
      to_email: email,
      message,
    };

    let emailSuccess = false;

    try {
      const emailResponse = await emailjs.send(
        "service_rocqjs7",
        "template_9dl3nmp",
        templateParams,
        "PHWyWAESlH91-bEju"
      );
      emailSuccess = emailResponse?.status === 200;
      if (emailSuccess) {
        // setOtpCreated(Date.now())
        setErrorr("");
        setOriginalOTP(tempotp);
        setMsg("An OTP has been sent to you email. Please confirm.");
        setGetOtp(true);
        setMinutes(1);
        setSeconds(30);
      }
    } catch (error) {
      console.log(error.message);
      setErrorr(error.message);
    }
  };

  const OTPHandler = async (e) => {
    e.preventDefault();
    setMsg("");
    if (otp !== "") {
      if (otp == originalOTP) {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            addUserInDatabase({ email, password, name });
            signInUser(auth, email, password);
            dispatch(loginUser({ email, password, name }));
            console.log(userCredential);
            onClose();
          })
          .catch((err) => {
            console.log(err);
            const userFriendlyErrorMessage = mapFirebaseErrorToMessage(
              err.code
            );
            setErrorr(userFriendlyErrorMessage);
          });
      } else {
        setErrorr("Incorrect OTP!");
      }
    } else {
      setErrorr("Enter your OTP!");
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (isLogin) {
      signInWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          const user = await getUserFromDatabase(email);
          dispatch(updateUser(user));
          if (user.profile === true) {
            navigate("/dashboard");
          } else {
            navigate("/auth");
          }
          console.log(userCredential);
          onClose();
        })
        .catch((err) => {
          console.log(err);
          const userFriendlyErrorMessage = mapFirebaseErrorToMessage(err.code);
          setErrorr(userFriendlyErrorMessage);
        });
    } else {
      const getUser = await getUserFromDatabase(email);
      if (!getUser) {
        const tempotp = generate(6);
        console.log(tempotp);
        const message = `Your OTP for Resume Shapers is ${tempotp}.`;
        var templateParams = {
          to_name: name,
          to_email: email,
          message,
        };

        let emailSuccess = false;

        try {
          const emailResponse = await emailjs.send(
            "service_rocqjs7",
            "template_9dl3nmp",
            templateParams,
            "PHWyWAESlH91-bEju"
          );
          emailSuccess = emailResponse?.status === 200;
          if (emailSuccess) {
            // setOtpCreated(Date.now())
            setOriginalOTP(tempotp);
            setMsg("An OTP has been sent to you email. Please confirm!");
            setGetOtp(true);
          }
        } catch (error) {
          console.log(error.message);
          setErrorr(error.message);
        }
      } else {
        setErrorr("It seems we already have a user with that email!");
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  return (
    <>
      {getOtp ? (
        <div className="popup">
          <div className="popup-content">
            <h2 className="loginHeader">
              <img src={img3} className="popupImg" />
              <span className="close" onClick={onClose}>
                &times;
              </span>
              OTP
            </h2>

            <form onSubmit={OTPHandler} className="loginForm">
              <div className="form-group">
                <label className="loginLabel">OTP:</label>
                <input
                  type="text"
                  className="loginInput"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
              <div className="form-actions">
                <button type="submit" className="loginNow">
                  Submit
                </button>
              </div>
              <div className="otpCenterResend">
                {errorr && <p className="errorMsg">{errorr}</p>}
                {msg && <p className="msg">{msg}</p>}
                <div className="countdown-text">
                  {seconds > 0 || minutes > 0 ? (
                    <p className="nocodeText">
                      Time Remaining:{" "}
                      <span style={{ color: "red" }}>
                        {minutes < 10 ? `0${minutes}` : minutes}:
                        {seconds < 10 ? `0${seconds}` : seconds}
                      </span>
                    </p>
                  ) : (
                    <p className="nocodeText">Didn't recieve code?</p>
                  )}

                  <button
                    type="button"
                    disabled={seconds > 0 || minutes > 0}
                    style={{
                      color: seconds > 0 || minutes > 0 ? "#c3c6c9" : "#FF5630",
                    }}
                    onClick={resendOTP}
                    className="resendOtpBtn"
                  >
                    Resend.
                  </button>
                </div>
              </div>
            </form>
          </div>
>>>>>>> 9283bed21a1f8738dc43be797b138c3ab30a0eab
        </div>
      ) : (
        <div className="popup">
          <div className="popup-content">
            <h2 className="loginHeader">
              <img src={img3} className="popupImg" />
              <span className="close" onClick={onClose}>
                &times;
              </span>
              {isLogin ? "Login" : "Sign Up"}
            </h2>
            <form onSubmit={submitHandler} className="loginForm">
              <div className="form-group">
                <label className="loginLabel">Email:</label>
                <input
                  type="email"
                  className="loginInput"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {!isLogin && (
                <div className="form-group">
                  <label className="loginLabel">Name:</label>
                  <input
                    className="loginInput"
                    type="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              )}
              <div className="form-group">
                <label className="loginLabel">Password:</label>
                <input
                  className="loginInput"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {errorr && <p className="errorMsg">{errorr}</p>}
              {msg && <p className="msg">{msg}</p>}
              <div className="form-actions">
                <button type="submit" className="loginNow">
                  {isLogin ? "Login" : "Sign Up"}
                </button>
                <button
                  type="button"
                  class="selectLoginBtn"
                  onClick={handleToggleMode}
                >
                  {isLogin
                    ? "Dont have an account? Sign Up"
                    : "Have an Account? Login"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPopup;
