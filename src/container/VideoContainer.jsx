import { useEffect, useRef } from "react";
import CampaignDesciption from "../components/common/CampaignDesciption";
export default function VideoContainer({ isPlaying, handleCampaignShow }) {
    const videoRef = useRef(null);

    useEffect(() => {
        if (isPlaying && videoRef.current) {
            videoRef.current.play();
        }
    }, [isPlaying, videoRef]);

    return (
        <div>
            {isPlaying && (
                <div className="absolute top-[12px] z-20 w-full left-0 p-2 ">
                    <CampaignDesciption />
                </div>
            )}

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
        </div>
    );
}
