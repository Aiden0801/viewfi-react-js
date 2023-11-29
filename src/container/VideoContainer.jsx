import { useContext, useEffect, useRef, useState } from "react";
import CampaignDesciption from "../components/common/CampaignDesciption";
import ClaimModal from "../components/common/ClaimModal";
import { CampaignContext } from "../context/CampaignContextProvider";
export default function VideoContainer({ isPlaying, handleCampaignShow }) {
    const videoRef = useRef(null);
    const { showCampaign, setShowCampaign } = useContext(CampaignContext);
    const [isShowVideo, setShowVideo] = useState(true);

    useEffect(() => {
        if (isPlaying) {
            videoRef.current.play();
        }
    }, [isPlaying, videoRef]);

    const handleShowClaimModal = (value) => {
        setShowCampaign(value);
    };

    const handleShowVideo = (value) => {
        setShowVideo(value);
    };

    return (
        <div>
            {!showCampaign && isPlaying && (
                <div className="absolute top-[12px] z-20 w-full left-0 p-2">
                    <CampaignDesciption
                        handleModal={handleShowClaimModal}
                        handleVideoShow={handleShowVideo}
                    />
                </div>
            )}
            {isShowVideo && (
                <video
                    ref={videoRef}
                    src={
                        "https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4"
                    }
                    className={`${
                        isPlaying
                            ? "absolute top-0 left-0 w-full h-full object-cover z-10 "
                            : "hidden"
                    }`}
                    controls={isPlaying}
                />
            )}

            {showCampaign && <ClaimModal />}
        </div>
    );
}
