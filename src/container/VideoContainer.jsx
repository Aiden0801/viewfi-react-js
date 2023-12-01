import CampaignDesciption from "../components/common/CampaignDesciption";
import VideoPlayer from "./VideoPlayer";

export default function VideoContainer() {
    const videoJsOptions = {
        autoplay: true,
        playbackRates: [0.5, 1, 1.25, 1.5, 2],
        responsive: true,
        controls: true,
        sources: [
            {
                src: "//vjs.zencdn.net/v/oceans.mp4",
                type: "video/mp4",
            },
        ],
    };

    return (
        <div>
            <div className="absolute top-[12px] z-20 w-full left-0 p-2">
                <CampaignDesciption />
            </div>
            <div className="w-screen h-screen">
                <VideoPlayer options={videoJsOptions} />
            </div>
        </div>
    );
}

/**
 * import React from 'react';

// This imports the functional component from the previous sample.
import VideoJS from './VideoJS'

const App = () => {
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: '/path/to/video.mp4',
      type: 'video/mp4'
    }]
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };

  return (
    <>
      <div>Rest of app here</div>
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
      <div>Rest of app here</div>
    </>
  );
}
 */
