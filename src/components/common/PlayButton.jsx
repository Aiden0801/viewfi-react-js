import React from "react";

export default function Button({ handleClick, text, imageURL }) {
    return (
        <button
            onClick={handleClick}
            className={
                "flex bg-[#FF2F80] justify-between items-center rounded-full"
            }
        >
            <div className="text-white font-normal text-[33px] xl:text-[30px] md:text-[20px] sm:text-[14px] max-sm:text-[14px] px-[30px] py-[5px] xl:px-[27px] xl:py-[4.5px] md:px-[16px] md:py-[2.7px] sm:px-[12.5px] sm:py-[2px] max-sm:px-[12.5px] max-sm:py-[2px]">
                {text}
            </div>
            <div className="p-1">
                <img
                    src={imageURL}
                    className="bg-white rounded-full w-[47px] xl:w-[42px] md:w-[25px] sm:w-[20px] max-sm:w-[20px]"
                    alt="btn_icon"
                />
            </div>
        </button>
    );
}
