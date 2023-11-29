import React, { useContext, useState } from "react";
import PlayButton from "../components/common/PlayButton";
import VideoContainer from "./VideoContainer";
import CampaignContext from "../components/common/CampaignContext";
import { CampaignContext as TempCampaignContext } from "../context/CampaignContextProvider";

export default function CampaignContainer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const handleClip = () => {
        setIsPlaying(true);
    };

    const { showCampaign } = useContext(TempCampaignContext);

    return (
        <div className="bg-[url('./assets/img/campaign_container.png')] bg-cover w-full h-screen flex items-center flex-col-reverse">
            {!showCampaign && (
                <>
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <PlayButton
                            handleClick={handleClip}
                            text={"Watch video to win"}
                            imageURL={"./img/btn_play.png"}
                        />
                    </div>
                    {!isPlaying && <CampaignContext />}
                </>
            )}
            {isPlaying && <VideoContainer isPlaying={isPlaying} />}
        </div>
    );
}
