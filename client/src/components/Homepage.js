import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Homepage = (props) => {
  const targetDate = new Date("July 21, 2024 00:00:00").getTime(); 
  const [daysToGo, setDaysToGo] = useState(calculateDaysToGo());

  function calculateDaysToGo() {
    const currentDate = new Date().getTime(); 
    const timeDifference = targetDate - currentDate;
    return Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); 
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setDaysToGo(calculateDaysToGo());
    }, 24 * 60 * 60 * 1000); 

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <h1 className="homepage-header">Tim and Abbie's Wedding!</h1>
      <div className="header-info">
        <h4>JULY 21, 2024 * CHITTENDEN, VT</h4>
        <h4>{daysToGo} {daysToGo === 1 ? 'DAY TO GO' : 'DAYS TO GO'}</h4>
      </div>
      <div>
        <h4>WELCOME PARTY</h4>
        <h5>SATURDAY, JULY 20, 2024</h5>
        <h5>7:00 PM-10:00 PM</h5>
      </div>
    </>
  );
};

export default Homepage;
