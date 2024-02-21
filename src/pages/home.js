import UploadPDF from "../components/uploadpdf";
import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../fireabse";
import { useDispatch, useSelector } from "react-redux";
import { signOutUser } from "../redux/slices/user";
import Nav from "../components/nav";
import "../styleSheet/Home.css";
import Footer from "../components/footer";
import "../styleSheet/Landing.css";
import vid from "../images/video1.mp4";
import ReactPlayer from "react-player";
import { useLocation, useNavigate } from "react-router-dom";
import { Check2Circle, DatabaseFill, Person } from "react-bootstrap-icons";
import img13 from "../images/19.png";
import Form from "../components/form";
// import Form from '../components/formcopy';
import "../styleSheet/Home.css";
import CreateUploadPopup from "../components/createUploadPopup";
import EnterPositionPopup from "../components/enterPositionPopup";

import { Power } from "react-bootstrap-icons";
import logActivity from "../helper/activityLog";
import { activity } from "../data/activity";
import generateRandomId from "../helper/generateId";

export default function Home() {
  const [showHomePopup, setShowHomePopup] = useState(true);
  const [showJobPopup, setShowJobPopup] = useState(false);
  const [jobData, setJobData] = useState(null);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.includes("/profile")) {
      setShowHomePopup(false);
    }
  }, []);

  const [personalData, setPersonalData] = useState({
    jobTitle: "",
    firstName: "",
    middleName: "",
    lastName: "",
    inputEmail: "",
    phone: "",
    dateOfBirth: "",
    city: "",
    address: "",
    postalCode: "",
    drivingLicense: "",
    nationality: "",
    placeOfBirth: "",
    country: "",
    professionalSummary: "",
    uploadedPhotoURL: "",
    employmentHistory: [
      {
        jobTitle: "",
        employer: "",
        startDate: "",
        endDate: "",
        city: "",
        description: "",
      },
    ],
    educationHistory: [
      {
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        city: "",
        description: "",
      },
    ],
    websitesAndLinks: [
      {
        name: "",
        url: "",
      },
    ],
  });

  const openPopup = () => {
    setShowJobPopup(true);
  };

  const closeJobPopup = () => {
    setShowJobPopup(false);
  };

  const saveJobData = (data) => {
    setJobData(data);
    console.log(data);
  };

  const handleClosePopup = () => {
    setShowHomePopup(false);
  };

  const handleUpload = (file) => {
    // upload file code
    console.log("File uploaded:", file.name);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handler = (e) => {
    signOut(auth)
      .then(() => {
        logActivity(
          activity.signOut.type,
          null,
          generateRandomId(),
          activity.signOut.description,
          user?.email
        );
        dispatch(signOutUser());
        console.log("signed out successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const user = useSelector((state) => state.user.user);
  return (
    <>
      <Nav />
      {/* {user&&user.credits&&<button  className="tokensBtn"> <DatabaseFill color="#35b276" size={22} style={{"position":"relative","top":"-2px"}}/> {user.credits} &nbsp;Credits</button>}   */}

      {showHomePopup && (
        <CreateUploadPopup
          personalData={personalData}
          setPersonalData={setPersonalData}
          onClose={handleClosePopup}
          onUpload={handleUpload}
        />
      )}
      <button onClick={() => handler()} className=" btn btn-success signoutBtn">
        <Power color="#35b276" size={22} /> &nbsp;Signout
      </button>
      <button
        onClick={() => navigate(`/profile/${user.email}`)}
        className="btn btn-success profileBtn"
      >
        <Person size={22} />
      </button>
      <div className="row homeDiv">
        <div className="HomeLeftDiv col-md-9 col-sm-9">
          <div className="formDetails">
            <h3 className="formTitle">Personalize your Profile</h3>
            <p className="formSubText">
              "Tell us more about yourself and the position you're targeting,
              and we'll create a personlized resume just for you."
            </p>
            <hr className="hrLine" />
            <Form
              personalData={personalData}
              setPersonalData={setPersonalData}
              location={location.pathname}
            />
          </div>
          {/* <button onClick={openPopup}>Add Job</button>
                    {showJobPopup && (
                        <EnterPositionPopup onClose={closeJobPopup} onSave={saveJobData} />
                    )} */}
        </div>
      </div>

      {/* <UploadPDF />

            <div className='section4'>
                <div className='videoSection row'>
                    <div className='col-md-6 sec4MidDiv1 '>
                        <ReactPlayer
                            className="player"
                            url={vid}
                            width="90%"
                            height="100%"
                            playing={true}
                            muted={true}
                            autoplay={true}
                            repeat={true}
                        />
                    </div>
                    <div className='col-md-6 sec4MidDiv2'>
                        <h4>Our Features</h4>
                        <p><Check2Circle color="#35b276" size={20} /> &nbsp;Create Tailored resumes for specific job applications.</p>
                        <p><Check2Circle color="#35b276" size={19} /> &nbsp;Ensure resume pass through ATS for better visibility. </p>
                        <p><Check2Circle color="#35b276" size={19} /> &nbsp;Enhance resumes with professional formatting.</p>
                        <p><Check2Circle color="#35b276" size={19} /> &nbsp;Receive keyword suggestions for better targeting.</p>
                        <p><Check2Circle color="#35b276" size={19} /> &nbsp;Download customized resumes instanly for multiple job applications.</p>
                        <p><Check2Circle color="#35b276" size={19} /> &nbsp;Get help from our dedicated support team when you need it.</p>
                    </div>
                </div>
            </div>

            <div className='section5'>
                <img src={img13} className="sec5Img" />
                <h1>Expertise, commitment, and value. It's our mission to consistently provide these to our clients.</h1>
            </div>

            <Footer /> */}
    </>
  );
}
