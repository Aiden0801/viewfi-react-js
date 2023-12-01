import React, { useState } from "react";
import RoundedButton from "../../components/buttons/RoundedButton";
import CampaignContext from "../../components/common/CampaignContext";
import VideoContainer from "../../container/VideoContainer";

const page = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isPlaying, setIsPlaying] = useState(false);
    const handleClip = () => {
        setIsPlaying(true);
    };

    return (
        <>
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <RoundedButton
                    handleClick={handleClip}
                    text={"Watch video to win"}
                    imageURL={"/img/btn_play.png"}
                />
            </div>
            {!isPlaying && <CampaignContext />}

            {isPlaying && <VideoContainer isPlaying={isPlaying} />}
        </>
    );
};

export default page;
