import React from 'react'
import Nav from '../components/nav';
import '../styleSheet/AboutUs.css'
import img1 from '../images/aboutUs.png'
import Footer from '../components/footer'
import { Power, ArrowLeft, Coin} from "react-bootstrap-icons";
import { signOut } from 'firebase/auth'
import { auth } from '../fireabse'
import { useDispatch, useSelector } from 'react-redux';
import { signOutUser } from '../redux/slices/user';
import {  useNavigate } from 'react-router-dom';


export default function AboutUs() {

  const dispatch = useDispatch();
    const navigate = useNavigate();

  const handler = (e) => {
    signOut(auth).then(() => {
        dispatch(signOutUser())
        console.log("signed out successfully")
        navigate("/")
    }).catch(err => {
        console.log(err)
    })
}
const returnBack = (e) => {
      navigate("/")
}
const user = useSelector(state=>state.user.user);
  return (
    <div>
          {user&&user.profile&&user.credits&&<button  className="tokensBtn"> <Coin color="#35b276" size={22}  style={{"position":"relative","top":"-2px"}}/> {user.credits} &nbsp;Credits</button>}  
        {user&&user.profile&&<button onClick={() => handler()} className=" btn btn-success signoutBtn aboutUsSignOutBtn"> <Power color="#35b276" size={22} /> &nbsp;Signout</button>}
        <Nav/>
        <div className="aboutUsContainer">
      <h1 className='aboutUsHeadig'><ArrowLeft color="#35b276" size={30} className='returnBackArrow' onClick={() => returnBack()} />About Us</h1>
      <hr></hr>
   
    <div className='aboutUsImgDiv'> 
      <img src= {img1} className='aboutUsImg'/> 
    </div> 
      
<p className='aboutUsContent'> 
Welcome to SaaSmartSolutions, where we are dedicated to crafting innovative solutions that simplify lives through technology. Our team has invested significant effort in creating a platform that can revolutionize your job application experience. Introducing our flagship product, the Resume Shaper.
    </p> 
    <p className='aboutUsContent'> 
    At SaaSmartSolutions, we understand the challenges of navigating the ever-evolving job market. That's why we've developed a cutting-edge Resume Shaper, designed to empower you in shaping resumes effortlessly on the go. Leveraging the capabilities of GPT tools, our platform ensures that your resumes stand out and make a lasting impression on potential employers.
    </p>
     <p className='aboutUsContent'> 
     Whether you're a seasoned professional or just starting your career journey, our Resume Shaper is tailored to meet your needs. It provides a seamless and user-friendly experience, allowing you to create personalized resumes for any job application with ease. Our commitment is to provide you with the tools you need to present your skills and experiences in the best possible light.
      </p> 
      <p className='aboutUsContent'> 
      Explore SaaSmartSolutions and experience the future of resume crafting. Elevate your job application game with our innovative platform and let your achievements shine. We believe in making technology work for you, and our Resume Shaper is a testament to that commitment.
      Join us on this journey of empowerment and efficiency. Shape your future with SaaSmartSolutions.
      </p> 
  

</div>
<Footer/>
      </div>
  )
}
