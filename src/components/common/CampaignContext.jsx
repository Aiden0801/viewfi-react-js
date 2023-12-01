import React from "react";

export default function CampaignContext() {
    return (
        <div className="flex justify-between gap-4  w-[1336px] xl:w-[1200px] md:w-[721.5px] sm:w-full max-sm:w-full h-[159px] xl:h-[143px] md:h-[86px] sm:h-[50px] max-sm:h-[50px] overflow-hidden z-30 bg-white border border-clightdark md:rounded-[31px] md:mb-[40px]">
            <div className="relative w-[100px] md:w-[200px] overflow-hidden h-full">
                <div className="flex justify-start pl-2 md:pl-3 gap-1 sm:gap-2 md:gap-3 py-4 items-center top-0 left-0 w-full h-full z-30 ">
                    <img
                        className="md:w-[73.5px] sm:w-[34.5px] max-sm:w-[34.5px] z-30"
                        src="/img/camp_context_banner.png"
                        alt="cam_context_icon"
                    />
                    <div className="bg-white/60 w-[1px] h-full z-30"></div>
                </div>
                <div className="absolute top-0 left-0 w-full h-[110%] bg-primary pl-4 flex py-2 -mb-10 md:py-4 gap-2 items-center rounded-br-full"></div>
            </div>
            <div className="flex justify-center items-center w-full">
                <p className="text-h1 xl:text-h2 md:text-h3 sm:text-h5 max-sm:text-h5 font-semibold ">
                    Get and gift an exclusive 1800 Digital flower collectible
                    NFT for watching this video
                </p>
            </div>
            <div className="relative h-full overflow-hidden w-[80px] sm:w-[70px] md:w-[120px]">
                <div className="absolute -right-2 md:-right-4 top-3 md:top-4 w-full h-full flex justify-center items-center">
                    <img
                        className="2xl:w-[41px] z-30 xl:w-[35px] md:w-[24px] sm:w-[20px] max-sm:w-[20px] "
                        src="/img/camp_context_info.png"
                        alt="camp_context_info"
                    />
                </div>
                <div className="absolute z-20 top-3 right-0 md:-right-6 bg-primary w-[70px] md:w-[120px] h-full rounded-tl-full flex pl-6 items-center mt-1 md:-mb-0 -mr-6"></div>
            </div>
        </div>
    );
}
