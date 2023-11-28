import React, { useContext, useState } from "react";
import PlayButton from "../components/common/PlayButton";
import VideoContainer from "./VideoContainer";
import CampaignContext from "../components/common/CampaignContext";
import {CampaignContext as TempCampaignContext} from "../context/CampaignContextProvider";


export default function CampaignContainer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const handleClip = () => {
    setIsPlaying(true);
  };

  const {showCampaign} = useContext(TempCampaignContext);

  return (
      <div className="campaign_container">
        {!showCampaign &&
        <>
        <div className="flex flex-1 justify-center items-center ">
          <PlayButton
            handleClick={handleClip}
            text={"Watch video to win"}
            imageURL={"./img/btn_play.png"}
          />
        </div>
        <CampaignContext />
        </>
        }
        {isPlaying && <VideoContainer isPlaying={isPlaying}/>}
      </div>
  );
}
