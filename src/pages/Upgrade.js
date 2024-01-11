import React from "react";
import "../styleSheet/Upgrade.css";

const Upgrade = () => {
  const basicPlan = {
    planName: "Basic",
    intialPrice: 12.99,
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
    intialPrice: 25.99,
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
    intialPrice: 35.99,
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

const Card = ({ planName, price, intialPrice, features, duration }) => {
  return (
    <div className='card zoom glasss'>
      <div className='cardUpper'>
        <h4>{planName}</h4>
        <h2>
          <del style={{ fontSize: "21px" }}>${intialPrice}</del> ${price}
          <span style={{ fontSize: "21px" }}>/month</span>
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
