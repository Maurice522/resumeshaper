import React, { useEffect, useState } from 'react'
import Nav from '../components/nav';
import { Power } from "react-bootstrap-icons";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../fireabse'
import { signOutUser } from '../redux/slices/user';
import '../styleSheet/Dashboard.css'
import { Share, ThreeDots, Check2Circle, PencilSquare, FileEarmarkArrowDownFill, Bullseye, PlusLg, PencilFill, Trash3Fill, ColumnsGap, Book, JournalRichtext, BagFill, GraphUpArrow, MegaphoneFill, Alipay, Bicycle, CheckSquare } from "react-bootstrap-icons";
import img1 from '../images/resumeTemplate.png'

export default function Dashboard() {
    const navigate =useNavigate()
    useEffect(()=>{
       
        const listen = onAuthStateChanged(auth, (user)=>{
            if (user) {
               console.log(user)
            }else{
                navigate("/")
               
            }
        })
    },[])

    const dispatch = useDispatch();
    const handler = (e) => {
        signOut(auth).then(() => {
            dispatch(signOutUser())
            console.log("signed out successfully")
            navigate("/")
        }).catch(err => {
            console.log(err)
        })
    }

    const [savedResumes, setSavedResumes] = useState([
        {
            id: 1,
            img: img1,
            title: 'My Profile',
            description: 'Description',
        },
    ]);

    const addSavedResume = () => {
        const newDiv = {
            id: savedResumes.length + 1,
            img: img1,
            title: 'My Profile',
            description: new Date().toLocaleString(),
        };
        setSavedResumes([...savedResumes, newDiv]);
        
    };



    const delSavedResume = (id) => {
        const updatedResumes = savedResumes.filter((resumes) => resumes.id !== id);
        setSavedResumes(updatedResumes);
    };

    const openSelectedResume = () => {
       navigate('/create')
    };

    return (
        <>
            <Nav />
            <button onClick={() => handler()} className=" btn btn-success signoutBtn"> <Power color="#35b276" size={22} /> &nbsp;Signout</button>
            <div className='dashboardDiv'>
                <h2 className='formTitle'>Resume Gallery</h2>
                <p className='formSubText'>"Welcome to your hub for organized resumes.Access, edit, or create new resumes for tailored job application."</p>
                <div className='dashHeader'>
                    <h4>Documents</h4>
                    <button className='createDoc zoom' onClick={addSavedResume}><PlusLg size={20} /> &nbsp;Create New</button>
                </div>
                <hr className='dashHrLine' />
                <div className='dashContent row'>
                    {savedResumes.map((savedResume) => (
                        <div key={savedResume.id} className='resume1Div col-md-6'>
                            <div className='row'>
                                <div className='col-md-4' onClick={openSelectedResume}>
                                    <img src={savedResume.img} className="resumeImg zoom" alt="Profile Image" />
                                    <h6 className='resumeTitle'>{savedResume.title}</h6>
                                </div>
                                <div className='col-md-8 editResumeOptions'>
                                    <button className='editResumeBtns ' onClick={() => delSavedResume(savedResume.id)}><Bullseye size={23} />&nbsp;&nbsp;&nbsp;&nbsp;Tailor To Your Job Listing</button><br />
                                    <button className='editResumeBtns ' onClick={() => delSavedResume(savedResume.id)}><PencilFill size={23} />&nbsp;&nbsp;&nbsp;&nbsp;Edit</button><br />
                                    <button className='editResumeBtns ' onClick={() => delSavedResume(savedResume.id)}><FileEarmarkArrowDownFill size={23} />&nbsp;&nbsp;&nbsp;&nbsp;Download</button><br />
                                    <button className='editResumeBtns ' onClick={() => delSavedResume(savedResume.id)}><Trash3Fill size={23} />&nbsp;&nbsp;&nbsp;&nbsp;Delete</button><br />
                                    <button className='editResumeBtns ' onClick={() => delSavedResume(savedResume.id)}><ThreeDots size={23} />&nbsp;&nbsp;&nbsp;&nbsp;More</button><br />
                                </div>
                                <p className='resumeDesc'><strong>Created At: </strong>{savedResume.description}</p>
                            </div>
                        </div>
                    ))}
                    <div className='resume1Div col-md-6  '>
                        <div className='addNewResumeDiv zoom' onClick={addSavedResume}>
                            <button className="editResumeBtns addResumePlusBtn" ><PlusLg size={35} /><br /></button>
                            <p>Add New</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
