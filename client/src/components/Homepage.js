import React, { useState, useEffect } from "react";

const Homepage = (props) => {
  const targetDate = new Date("July 21, 2024 00:00:00").getTime(); // Target date timestamp
  const [daysToGo, setDaysToGo] = useState(calculateDaysToGo());

  function calculateDaysToGo() {
    const currentDate = new Date().getTime(); // Current date timestamp
    const timeDifference = targetDate - currentDate;
    return Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); // Convert milliseconds to days and round up
  }

  useEffect(() => {
    // Update the countdown every day
    const timer = setInterval(() => {
      setDaysToGo(calculateDaysToGo());
    }, 24 * 60 * 60 * 1000); // 24 hours in milliseconds

    // Clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <h1>Tim and Abbie's Wedding!</h1>
      <div className="header-info">
        <h4>July 21, 2024 * CHITTENDEN, VT</h4>
        <h4>{daysToGo} {daysToGo === 1 ? 'DAY TO GO' : 'DAYS TO GO'}</h4>
      </div>
    </>
  );
};

export default Homepage;
