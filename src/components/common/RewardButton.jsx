import React, { useState, useEffect } from "react";

export default function Button({ handleClick }) {
    const [countDown, setcountDown] = useState(1);
    const [buttonText, setButtonText] = useState("Reward in");
    const [buttonImage, setButtonImage] = useState("./img/camp_reward.png");

    useEffect(() => {
        if (countDown > 0) {
            const timer = setTimeout(() => {
                setcountDown(countDown - 1);
            }, 1000);
            return () => clearTimeout(timer);
        } else {
            setButtonText("Claim now");
            setButtonImage("./img/camp_claim.png");
        }
    }, [countDown]);

    return (
        <button
            onClick={handleClick}
            disabled={countDown > 0}
            className={
                "flex gap-2 bg-[#FF2F80] justify-between items-center rounded-[79px] text-white font-medium px-[5px] py-[4px]"
            }
        >
            <div className="md:text-[25px] text-[16px]">
                {" "}
                {countDown > 0 ? `${buttonText} ${countDown}` : buttonText}{" "}
            </div>
            <div className="">
                <img
                    className="bg-white rounded-full md:w-[40px] w-[28px]"
                    src={countDown > 0 ? `${buttonImage}` : buttonImage}
                    alt="reward_button_icon"
                />
            </div>
        </button>
    );
}
