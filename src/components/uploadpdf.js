import React, { useEffect, useState } from 'react'
import { updateUserInDatabase, uploadMedia } from '../fireabse';
import { updateResume } from '../redux/slices/user';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const UploadPDF=()=>{
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const user = useSelector(state => state.user.user);

    const dispatch = useDispatch();

    const submitHandler = async(e)=>{
        e.preventDefault();
        setSubmitted(true)
        setLoading(true)
        const fileLink = await uploadMedia(file, "resume");
        await updateUserInDatabase(user.email,fileLink)
        dispatch(updateResume(fileLink))
        setLoading(false)
        //update resume
    }
  return (
    <>
    <h1>Upload Resume</h1>
    {!submitted && !loading && <form onSubmit = {submitHandler}>
        <input
            type='file'
            onChange={(e)=>setFile(e.target.files[0])}
        />
        
        <button type='submit'> Submit </button>
    </form> }

    {loading && "loading"}
    {submitted && !loading && `you have already submitted the resume here is the link to it ${user.resume}`}
    
    </>
  )
}

export default UploadPDF;