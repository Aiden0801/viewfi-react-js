import React from "react";
import ClaimModalHeader from "./ClaimModalHeader";
import ClaimButton from "./ClaimButton";
// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 overflow-hidden -translate-y-1/2 sm:w-[340px] w-full sm:h-fit h-screen bg-white sm:rounded-[25px] rounded-none p-4 pb-0 flex flex-col items-center sm:justify-normal justify-between gap-4">
            <div className="absolute z-10 top-[-222px] left-[-31px] sm:w-[473px] h-[473px] w-[110%]  bg-[#ff2f80] pl-4 flex py-2 -mb-10 md:py-4 gap-2 items-center rounded-full"></div>
            <ClaimModalHeader />
            <div className="z-20 w-[264px] h-[264px]">
                <img src="./img/chat_reward.png" alt="chat_reward" />
            </div>
            <div className="h-[0.1px] w-full px-3 bg-[#02172E]"></div>
            <div className="text-[25px] text-[#3A5471] font-semibold">
                Reward Unlocked
            </div>
            <ClaimButton />
            <div className="h-[0.1px] w-[125px] px-3 bg-[#02172E]"></div>
            <div className="flex justify-around items-center gap-2">
                <img src="./img/learn_more_info.png" alt="learn_more_info" />
                <div className="font-normal text-[11px] text-[#9CA6B2]">
                    Learn More
                </div>
            </div>
            <div className="flex items-center sm:w-[338px] w-full justify-between p-4 border-t border-[#d7d7d7] mt-6">
                <div className="text-[9px] font-normal text-[#02172E]">
                    <a className="underline" href="#">
                        Privacy Policy
                    </a>
                </div>
                <div className="flex items-center gap-1">
                    <div>
                        <img src="./img/viewfi_icon.png" alt="viewfi_icon" />
                    </div>
                    <div className="flex text-[11px]">
                        Powered by{" "}
                        <a className="underline" href="#">
                            Viewfi
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
