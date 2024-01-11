import React from "react";
import "../styleSheet/Upgrade.css";

const Upgrade = () => {
  const basicPlan = {
    planName: "Basic",
    price: 9.99,
    duration: "1 month",
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
    planName: "Pro",
    price: 19.99,
    duration: "6 months",
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
    planName: "Premium",
    price: 29.99,
    duration: "1 Year",
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

  return (
    <div className='upgrade-container'>
      <p onClick={() => window.history.go(-1)}>{"<- Back"}</p>
      <div className='upgrade-Upper'>
        <h3>Unlock the power of Resume Shaper</h3>
        <p>Choose a plan according to your needs</p>
      </div>
      <div className='upgradeCards'>
        <Card {...basicPlan} />
        <Card {...proPlan} />
        <Card {...premiumPlan} />
      </div>
    </div>
  );
};

export default Upgrade;

const Card = ({ planName, price, features, duration }) => {
  return (
    <div className='card zoom glasss'>
      <div className='cardUpper'>
        <h4>{planName}</h4>
        <h2>
          ${price}
          <span>/month</span>
        </h2>
        <h6>{duration}</h6>
        <button className='btn btn-success'>Upgrade Plan</button>
      </div>
      <div className='cardBottom'>
        <ul className='custom-list'>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
