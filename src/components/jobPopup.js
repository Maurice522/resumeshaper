import React, { useState } from 'react';
import img3 from '../images/28.png'
import '../styleSheet/LoginPopup.css'



export default function JobPopup({ onClose, onSignup }) {
    const [jobTitle, setJobTitle] = useState('');
    const [jobDescription, setJobDescription] = useState('');

    const submitLoginHandler = () => {
        alert('hello')
    }
    return (
        <div className="popup">
            <div className="popup-content">
                <h2 className='loginHeader'>
                    <img src={img3} className='popupImg' />
                    <span className="close" onClick={onClose}>&times;</span>
                    Resume Shaper</h2>
                <form className="loginForm" onSubmit={submitLoginHandler}>
                    <div className="form-group">
                        <label className='loginLabel'>Job Title:</label>
                        <input
                            type='text'
                            className='loginInput'

                            placeholder='Enter the Job Title'
                            value={jobTitle}
                            onChange={(e) => setJobTitle(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label className='loginLabel'>Job Description:</label>
                        <textarea
                            value={jobDescription}
                            onChange={(e) =>  setJobDescription(e.target.value)}
                            rows="4 "
                            cols="26"
                            placeholder='Eg: I was provided with a range of responsibilities to levarage the digital landscape for brand promotion and lead generation.'
                            className='detailsTextarea'
                        />
                    </div>

                    <div className="form-actions">
                        <button type="submit" className='loginNow'>Generate</button>
                    </div>


                </form>
            </div>
        </div>
    );
};
