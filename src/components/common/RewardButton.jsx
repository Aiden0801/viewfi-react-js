import React, { useState, useEffect } from "react";

export default function Button({ handleClick }) {
  const [countdown, setCountdown] = useState(15);
  const [buttonText, setButtonText] = useState("Reward in");
    const [buttonImage, setButtonImage] = useState("./img/camp_reward.png")
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
        setButtonText("Claim now");
        setButtonImage("./img/camp_claim.png")
    }
  }, [countdown]);
  return (
    <button
      onClick={handleClick}
      disabled = {countdown > 0}
      className={"btn_reward flex bg-[#FF2F80] justify-between items-center" }
    >
      <div> {countdown > 0 ? `${buttonText} ${countdown}` : buttonText} </div>
      <div>
        <img src={countdown > 0 ? `${buttonImage}` : buttonImage} className="i_play" alt="btn_icon" />
      </div>
    </button>
  );
}
