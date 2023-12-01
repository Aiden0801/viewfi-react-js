import CampaignDescription from "../components/common/CampaignDescription";
import VideoPlayer from "./VideoPlayer";

export default function VideoContainer() {
    const videoJsOptions = {
        autoplay: true,
        playbackRates: [0.5, 1, 1.25, 1.5, 2],
        responsive: true,
        controls: true,
        sources: [
            {
                src: "https://vimeo.com/662065137",
                type: "video/vimeo",
            },
        ],
    };

    return (
        <div>
            <div className="absolute top-[12px] z-20 w-full left-0 p-2">
                <CampaignDescription />
            </div>
            <div className="w-screen h-screen">
                <VideoPlayer options={videoJsOptions} />
            </div>
        </div>
    );
}
