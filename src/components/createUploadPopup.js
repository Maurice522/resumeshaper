import React, { useState } from 'react';
import '../styleSheet/createUpload.css'
import img3 from '../images/28.png'
import { updateUserInDatabase, uploadMedia } from '../fireabse';
import { useDispatch, useSelector } from 'react-redux';
import { updateResume } from '../redux/slices/user';
// import pdf from 'pdf-parse';
// import OpenAI from 'openai';


// async function extractTextFromPDF(pdfUrl) {
//   try {
//     // Make an HTTP request to the PDF URL and get the response as a buffer.
//     const pdfBuffer = await fetch({ url: pdfUrl, encoding: null });

//     // Parse the PDF data.
//     const pdfData = await pdf(pdfBuffer);

//     // Extract the text content.
//     const textContent = pdfData.text;

//     return textContent;
//   } catch (error) {
//     console.error('Error extracting text from PDF:', error);
//     return null;
//   }
// }
// async function responsecreate(openai,pdfText) {
//   const completion = await openai.chat.completions.create({
//     messages: [
//       { 
//           role: "system", 
//           content: "You are an AI resume extractor." 
//       },
//       {
//           role: 'user',
//       content: `
//       Consider the following raw resume text extracted from a user's resume PDF delimited between ### ###:
//       ###${pdfText}###
//       --------------------------------------------------------------
//       Generate a valid JSON response with the extracted resume text. 
//       Note:
//       - Generate JSON with section names as keys and text extracted from the resume as values.
//       - Provide a single-line JSON response. 
//       - Respond only with the generated JSON response.
//       - Do not add new lines; keep the text as in the resume.
//       - If the PDF does not seem to be a resume, return an error message.
//       -use lower case only
//       `,
    
//       }
//   ],
//     model: "gpt-3.5-turbo",
//   });

//   console.log(completion.choices[0].message.content);
//   var temp = JSON.parse(completion.choices[0].message.content)
//   console.log(temp)
//   console.log(temp.objective)
//   return temp;
// }

export default function CreateUploadPopup({ onClose}) {

  // const openai = new OpenAI({
  //   apiKey: ,
  // });

  const [file, setFile] = useState(null);
  const [upload, setUpload] = useState(false);
  const [loading, setLoading] = useState(false);

  const user = useSelector(state => state.user.user)

  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
   
    setUpload(true)
    
  };

  const handleBack = ()=>{
    setUpload(false)

  };
  const handleUploadResume = async() => {
    if (file) {
      setLoading(true)
      const fileLink = await uploadMedia(file, "resume");
      await updateUserInDatabase(user.email, fileLink)
      dispatch(updateResume(fileLink))
      // const res = fetch('https://resumegeneratorbackend.onrender.com/extract-text', {
      //   method: 'POST',
      //   body: JSON.stringify({
      //   pdf_url:fileLink
      //   }),
      //   headers: {
      //     "Content-type": "application/json; charset=UTF-8"
      //   }
      // })
      // .then((response) => response.json())
      // .then((responseJson) => {
      //   console.log(responseJson)
      //   return responseJson;
      // })

      // console.log(res)

      // const pdfText = await extractTextFromPDF(fileLink);
      // const openAIResponse = await responsecreate(openai,pdfText);

      // console.log(openAIResponse)
      setLoading(false)
      
      onClose();
    }
  };

  return (
    <div className="homePpopup">
      <div className="popup-content">

        {loading? 
        <>
        {/* <img width="480" height="320" alt='loading...' src='https://media0.giphy.com/media/daak2Jqk5NZN2G4PKD/giphy.gif?cid=ecf05e47cgp9tyccc55lm02fihptwokn5kx9zvu877ix5b7j&ep=v1_gifs_related&rid=giphy.gif&ct=g' /> */}
        <img width="460" height="320" alt='loading...' src='https://media1.giphy.com/media/emHFjFhg9Ha0wQjihU/giphy.gif?cid=ecf05e47hk4qemarhmgqkea2nnod6ccd9puf27jnwfx9l21i&ep=v1_gifs_search&rid=giphy.gif&ct=g' />
        {/* <iframe src="https://giphy.com/embed/daak2Jqk5NZN2G4PKD" width="480" height="320" frameBorder="0" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/daak2Jqk5NZN2G4PKD"></a></p> */}
        </>
        :<>
        <h2 className='homeHeader'>
          <img src={img3} className='popupImg' />
          Welcome to Resume Builder</h2>
          { !upload && <p className='homeSelectOption'>Select an Approach:</p>}
        { !upload && <button onClick={onClose} className="newResumeBtn ">Create a Fresh Resume</button>}
        { upload &&<> 
          <div className="mb-3">
          <label for="formFile" className="uploadResumeInput form-label">Choose Your Resume</label>
          <input className="uploadResumeInput form-control" type="file" accept=".pdf" id="formFile" onChange={handleFileChange} />
          </div>
          </>
        }
        { !upload &&<button className='homePopupBtn  ' onClick={handleUpload}>Upload your Resume</button>}
        { upload && <button className='homePopupBtnShort  ' onClick={handleBack}>Back</button>}
        { upload && <button className='homePopupBtnShort  ' onClick={handleUploadResume}>Upload</button>}
        </>}
        
      </div>
    </div>
  );
};

