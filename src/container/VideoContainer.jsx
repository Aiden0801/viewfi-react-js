import { useContext, useEffect, useRef, useState } from "react";
import CampaignDesciption from "../components/common/CampaignDesciption";
import ClaimModal from "../components/common/ClaimModal";
import { CampaignContext } from "../context/CampaignContextProvider";
export default function VideoContainer({ isPlaying, handleCampaignShow }) {
  const videoRef = useRef(null);
  useEffect(() => { 
    if (isPlaying) {
      videoRef.current.play();
    }
  }, [isPlaying, videoRef]);
  const {showCampaign, setShowCampaign} = useContext(CampaignContext)
  const [showVideo, setShowVideo] = useState(true);
  
  const handleShowModal = (value) => {
    console.log(value);
    setShowCampaign(value)
  };

  const handleVideoShow = (value) => {
    setShowVideo(value);
  }
  return (
    <div>
      {!showCampaign && isPlaying && (
        <div className="absolute top-[12px] z-20 w-full left-0">
          <CampaignDesciption handleModal={handleShowModal} handleVideoShow = {handleVideoShow} />
        </div>
      )}
      { showVideo &&
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
      }

      {showCampaign && <ClaimModal />}
    </div>
  );
}
