import React, { useState } from "react";
import { auth, db, getUserFromDatabase } from "../fireabse";
import { loginUser, updateUser } from "../redux/slices/user";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addUserInDatabase } from "../fireabse";
import img3 from "../images/28.png";
import "../styleSheet/LoginPopup.css";
import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  limitToLast,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";
import logActivity from "../helper/activityLog";

const LoginPopup1 = ({ onClose, onSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [degree, setDegree] = useState("");
  const [batch, setBatch] = useState("");
  const [errorr, setErrorr] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    }
  };

  const handleToggleMode = () => {
    setIsLogin(!isLogin);
    setErrorr(null);
  };

  async function checkEmailValidity(email) {
    try {
      const metaCollection = collection(db, "meta");
      const validEmailsDocRef = doc(metaCollection, "validEmails");

      const docSnapshot = await getDoc(validEmailsDocRef);

      if (docSnapshot.exists()) {
        const { emails } = docSnapshot.data();

        if (Array.isArray(emails) && emails.includes(email)) {
          console.log(`${email} is a valid email.`);
          return true;
        } else {
          console.log(`${email} is not found in the valid emails array.`);
          return false;
        }
      } else {
        console.log('The "validEmails" document does not exist.');
      }
    } catch (error) {
      console.error("Error checking email validity: ", error);
    }
  }

  const signInUser = (auth, email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = await getUserFromDatabase(email);
        dispatch(updateUser(user));
        navigate("/auth");
        console.log(userCredential);
      })
      .catch((err) => {
        console.log(err);
        const userFriendlyErrorMessage = mapFirebaseErrorToMessage(err.code);
        setErrorr(userFriendlyErrorMessage);
      });
  };

  const AddToRegisteredUsers = async (email, name, batch, degree) => {
    try {
      const metaCollection = collection(db, "meta");
      const registeredUsersDocRef = doc(metaCollection, "registeredUsers");

      await updateDoc(registeredUsersDocRef, {
        users: arrayUnion({
          email: email,
          name: name || null,
          batch: batch || null,
          degree: degree || null,
          timestamp: serverTimestamp(),
        }),
      });

      console.log("User signed up and added to Firestore successfully!");
    } catch (error) {
      console.error("Error signing up user and adding to Firestore:", error);
      throw error;
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (isLogin) {
      signInWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          const user = await getUserFromDatabase(email);
          logActivity(
            "LOGIN",
            null,
            "1",
            "User Logged In",
            "akaditya394@gmail.com"
          );
          dispatch(updateUser(user));
          navigate("/auth");
          console.log(userCredential);
          onClose();
        })
        .catch((err) => {
          console.log(err);
          const userFriendlyErrorMessage = mapFirebaseErrorToMessage(err.code);
          setErrorr(userFriendlyErrorMessage);
        });
    } else {
      var founduser = getUserFromDatabase(email);
      if (founduser === undefined) {
        if (checkEmailValidity(email)) {
          createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              addUserInDatabase({ email, password, name });
              signInUser(auth, email, password);
              // AddToRegisteredUsers(email, name, batch, degree);
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
          console.log("Email is not valid");
          toast.error("Email is not valid");
        }
      }
    }
  };

  return (
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
              <label className="loginLabel">Degree:</label>
              <input
                className="loginInput"
                type="name"
                placeholder="Eg. B.Tech"
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
              />
              <label className="loginLabel">Batch:</label>
              <input
                className="loginInput"
                type="name"
                placeholder="Eg. 2020-2024"
                value={batch}
                onChange={(e) => setBatch(e.target.value)}
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
  );
};

export default LoginPopup1;
