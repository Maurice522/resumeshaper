import React, { useState, useRef } from 'react'
import ReactPlayer from 'react-player'
import img3 from '../images/28.png'
import '../styleSheet/LoginPopup.css'
// import vid1 from '../images/loadingVid2.mp4'
import vid1 from '../images/loadingVid1.mp4'
import { toast } from 'react-toastify'
import { updateCredits } from '../redux/slices/user'
import { useDispatch,useSelector } from 'react-redux'
import { updateUserCreditsInDatabase } from '../fireabse'
import { Tooltip } from 'react-tooltip'
import { DatabaseFill} from "react-bootstrap-icons";

export default function JobPopup({ onClose, onSignup, jobTitle, setJobTitle, jobDescription, setJobDescription, getSummary, getAiSkills, setPersonalData, personalData, getJD }) {

    const [isLoading, setIsLoading] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const dispatch = useDispatch()

    const user = useSelector(state=>state.user.user)

    const submitLoginHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        if(jobTitle!=='' && jobDescription!==''){
        try {
            console.log(personalData)

           
            var temp = personalData;
            Object.entries(temp).map(([key, value]) => {
                if(value == undefined){
                    console.log(true)
                    temp[key] = '';
                }
              })

            console.log(temp)
            temp.jobTitle = jobTitle;
            console.log(temp)
            setPersonalData(temp);

            
            personalData.employmentHistory.map(async(item,idx)=>{
                await getJD(idx)
            })
           
            await getSummary(); 
            await getAiSkills(); 
            setShowConfirmation(true);
        } catch (error) {
            console.log(error);
            alert("An error occured while processing your document. Please try again later");
        } finally {
            setIsLoading(false);
        }
        }else{
            toast.info("Fields can not be empty!")
        }
    };

    const handleConfirmClose = () => {
        onClose();
    };
    const playerRef = useRef(null);

    const handleEnded = () => {
        // Restart the video when it ends
        playerRef.current.seekTo(0);
    };

    return (
        <div className="popup">
            <div className="popup-content">
                <h2 className='loginHeader'>
                    <img src={img3} className='popupImg' />
                    <span className="close" onClick={onClose}>&times;</span>
                    Resume Shaper</h2>
                {isLoading ? (
                    <div className="loading-message">
                          <ReactPlayer
                                            style={{cursor:"pointer"}}
                                            className="player"
                                            url={vid1}
                                            width="100%"
                                            height="100%"
                                            playing={true}
                                            muted={true}
                                            autoplay={true}
                                            onEnded={handleEnded}
                                            ref={playerRef}
                                        />
                    </div>
                ) : showConfirmation && jobTitle!=='' ? (
                    <div>
                        <p className='jobInstructionPopup'>Document successfully processed! </p>
                        <p className='jobInstructionLowerPopup'>Your professional summary and skills have been optimized to match the provided job title and description. Feel free to edit them, along with other fields, to suit your preferences.</p>
                        <button onClick={handleConfirmClose} className='loginNow'>Understood</button>
                    </div>
                ) : (

                    <form className="loginForm" onSubmit={submitLoginHandler}>
                        <div className="form-group">
                            <label className='loginLabel'>Job Title:</label>
                            <input
                                type='text'
                                className='loginInput jobTitleInput'

                                placeholder='Enter the Job Title - Eg: Prompt Engineer'
                                value={jobTitle}
                                onChange={(e) => setJobTitle(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label className='loginLabel'>Job Description:</label>
                            <p className='jobPopupDescriptionP'>Include or replicate the job description as mentioned  on the employer's website within the specified field.</p>
                            <textarea
                                value={jobDescription}
                                onChange={(e) => setJobDescription(e.target.value)}
                                rows="4 "
                                cols="26"
                                placeholder='Eg: We are looking for a Prompt Engineer to join our team and ensure the creation of effective and engaging prompts for our AI-generated content solutions. Responsibilities include : Design, develop and refine AI-generated text prompts for various applications
                            Collaborate with content creators, product teams and data scientists to ensure prompt alignment with company goals and user needs'
                                className='detailsTextarea jobPopupDescription'
                            />
                        </div>
                        <div className="form-actions">
                            <button style={{'position':"relative"}} type="submit" className='loginNow' >
                           <strong>Tailor It !</strong></button> 
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};
