import React from "react";
import "../styleSheet/Upgrade.css";
import { Power, ArrowLeft, DatabaseFill } from "react-bootstrap-icons";
import FooterReverse from "../components/footerreverse";
import { useNavigate } from "react-router-dom";

const Upgrade = () => {
  const basicPlan = {
    planName: "20",
    intialPrice: 79,
    price: 59,
    duration: "save 25.32%",
    features: [
      "Standard Templates",
      "Basic Editing Tools",
      "1 Resume Download/Month",
      "Email Support",
      "User-Friendly Interface",
      "Quick Resume Building",
    ],
  };

  const proPlan = {
    planName: "50",
    intialPrice: 200,
    price: 129,
    duration: "save 35.18%",
    features: [
      "Advanced & Industry-Specific Templates",
      "Full Editing Suite",
      "Unlimited Resume Downloads",
      "Priority Email Support",
      "Resume Analytics Dashboard",
      "Customizable Layout Options",
      "24/7 Customer Assistance",
    ],
  };

  const premiumPlan = {
    planName: "125",
    intialPrice: 499,
    price: 249,
    duration: "save 50.1%",
    features: [
      "Exclusive AI-Enhanced Templates",
      "AI Content Enhancement",
      "Priority Email & Live Chat Support",
      "Unlimited Resume Downloads",
      "Personalized Resume Review by Experts",
      "Access to Future Feature Beta Releases",
      "Intuitive Drag-and-Drop Editor",
      "Advanced Resume Insights",
    ],
  };

  const maxPlan = {
    planName: "200",
    intialPrice: 799,
    price: 379,
    duration: "save 52.57%",
    features: [
      "Exclusive AI-Enhanced Templates",
      "AI Content Enhancement",
      "Priority Email & Live Chat Support",
      "Unlimited Resume Downloads",
      "Personalized Resume Review by Experts",
      "Access to Future Feature Beta Releases",
      "Intuitive Drag-and-Drop Editor",
      "Advanced Resume Insights",
    ],
  };
  const navigate = useNavigate();
  return (
    <div>
    <div className='upgrade-container'>
      <p onClick={() => window.history.go(-1)}>{"<- Back"}</p>
      <div className='upgrade-Upper'>
        <h3>Unlock the power of Resume Shaper</h3>
        <p>Choose a plan according to your needs</p>
      </div>
      <div className="cards-container">
      <div className='upgradeCards'>
        <Card {...basicPlan} />
        <Card {...proPlan} />
      </div>
      <div className='upgradeCards' style={{marginTop:"10%"}}>
        <Card {...premiumPlan} />
        <Card {...maxPlan} />
      </div>
      </div>
    </div>
      <FooterReverse />
    </div>
  );
};

export default Upgrade;

const Card = ({ planName, price, intialPrice, features, duration }) => {
  const navigate = useNavigate();
  return (
    <div className='card zoom'>
      <div className='cardUpper'>
        <h4>{planName} <DatabaseFill
            color='#347571'
            size={22}
            style={{ position: "relative", top: "-3px" }}
          /></h4>
        <h2>
          <del style={{ fontSize: "21px", marginBottom:"100px" }}>₹{intialPrice}</del> ₹{price}
        </h2>
        <h6 style={{ color:"black"}}>{duration}</h6>
        <button onClick={() => navigate("/payment",{ state: { price } })} style={{backgroundColor:"#347571", color:"white", padding:"6px 15px", border:"none", borderRadius:"25px", marginTop:"5px"}}>Upgrade Plan</button>
      </div>
      <div className='cardBottom'>
        {/* <ul className='custom-list'>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};
