import React, { useEffect, useState } from 'react'
import { updateUserInDatabase, uploadMedia } from '../fireabse';
import { updateResume } from '../redux/slices/user';
import { useDispatch, useSelector } from 'react-redux';
import img1 from '../images/27.png'

const UploadPDF = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const user = useSelector(state => state.user.user);

  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    setSubmitted(true)
    setLoading(true)
    const fileLink = await uploadMedia(file, "resume");
    await updateUserInDatabase(user.email, fileLink)
    dispatch(updateResume(fileLink))
    setLoading(false)
    //update resume
  }
  return (
    <>
      <div className='row homeSec1'>
        <div className='col-md-5'>
          <img src={img1} className='uploadImg' />
        </div>
        <div className='col-md-7 hSec1RightDiv'>
          <div className='uploadPdfDiv'>
            <h3>Upload Your Reume Below</h3>

            {!submitted && !loading && <form onSubmit={submitHandler}>
              <div className='uploadEmptyDiv'>
                <input
                  type='file'
                  onChange={(e) => setFile(e.target.files[0])}
                  className="uploadFileInput"
                /><br></br>
              </div>
              <button type='submit' className='sbtBtn btn btn-success' > Submit </button>
            </form>}

            {loading && "Plese wait while we are Working.."}
            {submitted && !loading && `Thank You for submitting your resume. Here is the link to it ${user.resume}`}

          </div>
        </div>

      </div>
    </>
  )
}

export default UploadPDF;