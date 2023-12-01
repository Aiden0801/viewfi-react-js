import React from "react";

export default function Button({ handleClick, text, imageURL }) {
    return (
        <button
            onClick={handleClick}
            className={
                "flex bg-primary justify-between items-center rounded-full"
            }
        >
            <div className="text-white font-normal text-h0 xl:text-h1 md:text-h2 sm:text-h3 max-sm:text-h4 px-[30px] py-[5px] xl:px-[27px] xl:py-[4.5px] md:px-[16px] md:py-[2.7px] sm:px-[12.5px] sm:py-[2px] max-sm:px-[12.5px] max-sm:py-[2px]">
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
