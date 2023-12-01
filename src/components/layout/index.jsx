import { Outlet, useLocation } from "react-router-dom";
import CampaignDesciption from "../common/CampaignDesciption";
import { useContext, useState } from "react";
// import { CampaignContext as TempCampaignContext } from "../context/CampaignContextProvider";

const Layout = () => {
    const location = useLocation();
    console.log(location.pathname);
    // const [isPlaying, setIsPlaying] = useState(false);
    // const handleClip = () => {
    //     setIsPlaying(true);
    // };

    // const { showCampaign } = useContext(TempCampaignContext);

    const publicRoute = ["/dashboard"];
    return (
        <div className="bg-[url('./assets/img/campaign_container.png')] bg-cover w-full h-screen flex items-center flex-col-reverse">
            {/* {!showCampaign && isPlaying && (
                <div className="absolute top-[12px] z-20 w-full left-0 p-2 ">
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
            )} */}

            {/* {showCampaign && ( */}
            {publicRoute.includes(location.pathname) ? (
                <Outlet />
            ) : (
                <div className=" w-screen h-screen fixed top-0 left-0 bg-transparent backdrop-blur-sm">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 overflow-hidden -translate-y-1/2 sm:w-[340px] w-full sm:h-fit h-screen bg-white sm:rounded-[25px] rounded-none p-4 pb-0 flex flex-col sm:justify-normal justify-between gap-4">
                        <Outlet />
                    </div>
                </div>
            )}
            {/* )} */}
        </div>
    );
};

export default Layout;
