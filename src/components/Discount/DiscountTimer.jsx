import React, { useEffect, useState } from "react";

const DiscountTimer = () => {
    const targetDate= new Date().getTime() + 1000 * 60* 60* 24 * 25; //set 25 days coundown
    const getTimeRemaining = () =>{
        const now = new Date().getTime();
        const difference = targetDate - now;
        return {
            days: Math.floor(difference /(1000 * 60 *60 *24)),
            hours: Math.floor((difference / (1000 *60 *60)) %24 ),
            minutes:Math.floor((difference / (1000 *60)) %60 ),
            second:Math.floor((difference /1000 ) % 60)
        };
    };
    const [timeLeft,setTimeLeft] = useState(getTimeRemaining());
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeRemaining());
        },1000);
        return () => clearInterval(timer)  //
    },[]);
  return (
    <div className="flex justify-center md:justify-start space-x-5 font-semibold text-2xl my-6">
      <div>
        <span className="text-pink-500">{timeLeft.days}</span> <br />
        Days
      </div>
      <div>
        <span className="text-pink-500">{timeLeft.hours}</span> <br />
        Hrs
      </div>
      <div>
        <span className="text-pink-500">{timeLeft.minutes}</span> <br />
        Min
      </div>
      <div>
        <span className="text-pink-500">{timeLeft.second}</span> <br />
        Sec
      </div>
    </div>
  );
};

export default DiscountTimer;
