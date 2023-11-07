import React, { useEffect, useState } from 'react'
import Nav from '../components/nav';
import { Power } from "react-bootstrap-icons";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth, getUserFromDatabase } from '../fireabse'
import { signOutUser, updateUser } from '../redux/slices/user';
import '../styleSheet/Dashboard.css';
import { Share, ThreeDots, Check2Circle, PencilSquare, FileEarmarkArrowDownFill, Bullseye, PlusLg, PencilFill, Trash3Fill, ColumnsGap, Book, JournalRichtext, BagFill, GraphUpArrow, MegaphoneFill, Alipay, Bicycle, CheckSquare } from "react-bootstrap-icons";
import img1 from '../images/template1.PNG'
import img2 from '../images/template2.PNG'
import img3 from '../images/template3.PNG'
import img4 from '../images/template4.PNG'
import Templates from '../components/templates';

export default function Dashboard() {
    const navigate =useNavigate()
    const [gettingUser, SetGettingUser] = useState(false);
    useEffect(()=>{
       
        const listen = onAuthStateChanged(auth, async(user)=>{
            if (user) {
                SetGettingUser(true)
                const userFirebase = await getUserFromDatabase(user.email)
                dispatch(updateUser(userFirebase))
                initializeSavedResumes(userFirebase)
                SetGettingUser(false)
            }else{
                navigate("/")
               
            }
        })
    },[])
    
    const [savedResumes, setSavedResumes] = useState([
        {
            resumeId: 1,
            img: img1,
            title: 'My Profile',
            description: 'Description',
            id:"id46876548",
            idx:0
        },
    ]);
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);
    const handler = (e) => {
        signOut(auth).then(() => {
            dispatch(signOutUser())
            console.log("signed out successfully")
            navigate("/")
        }).catch(err => {
            console.log(err)
        })
    }
    const initializeSavedResumes = (user)=>{
        var temp = [];
        var srem={
            resumeId: 1,
            img: img1,
            title: 'My Profile',
            description: 'Description',
            id:"id46876548",
            idx:0
        };

        user.resumes.map((resume,index)=>{
            var tempimg = img1;

            if(resume.resumeId === 2){
                tempimg = img2;
            }else if(resume.resumeId === 3){
                tempimg = img3;
            }else if(resume.resumeId === 4){
                tempimg = img4;
            }

            srem.resumeId = resume.resumeId;
            srem.img = tempimg;
            srem.title = resume.jobTitle;
            srem.description = resume.professionalSummary.substring(0, 20);
            srem.id = resume.id;
            srem.idx = index;

            temp.push(srem);
        })
        setSavedResumes(temp)
    }

    const addSavedResume = () => {
        const newDiv = {
            resumeId: 1,
            img: img1,
            title: 'My Profile',
            description: new Date().toLocaleString(),
            id:"id4687654848"
        };
        setSavedResumes([...savedResumes, newDiv]);
        
    };



    const delSavedResume = (id) => {
        const updatedResumes = savedResumes.filter((resumes) => resumes.id !== id);
        setSavedResumes(updatedResumes);
    };

    const openSelectedResume = (remid,idx) => {
       navigate('/create', {state:{currRemId:remid,idx:idx}})
    };

    return (
        <>
        {gettingUser? <img style={{ position: "absolute",top: "50%",left: "50%",transform: "translate(-50%, -50%)"}} width="240" height="240" alt='loading...' src='https://media2.giphy.com/media/MDrmyLuEV8XFOe7lU6/200w.webp?cid=ecf05e47k6onrtqddz8d98s4j5lhtutlnnegeus1pwcdwkxt&ep=v1_gifs_search&rid=200w.webp&ct=g' /> :
        <>
        {console.log(savedResumes)}
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
                                <div className='col-md-4' onClick={()=>openSelectedResume(savedResume.resumeId,savedResume.idx)}>
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
        }
        </>
    )
}
