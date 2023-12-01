import React from "react";
import RewardButton from "../buttons/RewardButton";
import { useNavigate } from "react-router-dom";

export default function CampaignDesciption() {
    const navigate = useNavigate();

    const handleClaimClick = () => {
        navigate("/claim");
    };
    return (
        <div className="flex items-center justify-between rounded-[20px] border-[0.65px] border-clightdark p-2">
            <div className="flex items-center gap-4 h-full">
                <img
                    className="xl:w-[88px] md:w-[65px] w-[40px]"
                    src="/img/camp_context_banner.png"
                    alt="camp_desc_banner"
                />
                <div className="w-[1px] xl:h-[65px] md:h-[50px] h-[30px] bg-black/80"></div>
                <div className="text-primary">
                    <div className="md:text-h2 text-h3 font-semibold">
                        Nike Rewards
                    </div>
                    <div className="md:text-h3 text-h4 font-medium">
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
