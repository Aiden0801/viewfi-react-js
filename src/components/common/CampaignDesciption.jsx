import React from "react";
import RewardButton from "../../components/common/RewardButton";

export default function CampaignDesciption({ handleModal, handleVideoShow }) {
    const handleClaimClick = () => {
        handleModal(true);
        handleVideoShow(false);
    };
    return (
        <div className="flex items-center justify-between rounded-[20px] border-[0.65px] border-[#C5C5C5] p-2">
            <div className="flex items-center gap-4 h-full">
                <img
                    className="xl:w-[88px] md:w-[65px] w-[40px]"
                    src="./img/camp_context_banner.png"
                    alt="camp_desc_banner"
                />
                <div className="w-[1px] xl:h-[65px] md:h-[50px] h-[30px] bg-black/80"></div>
                <div className="text-[#FF2F80]">
                    <div className="md:text-[25px] text-[16px] font-semibold">
                        Nike Rewards
                    </div>
                    <div className="md:text-[16px] text-[12px] font-medium">
                        Claim your reward by clicking the claim now button
                    </div>
                </div>
            </div>
            <div>
                <RewardButton handleClick={handleClaimClick} />
            </div>
        </div>
    );
}
