import React from "react";

export default function CampaignContext() {
    return (
        <div className="flex justify-between gap-4  w-[1336px] xl:w-[1200px] md:w-[721.5px] sm:w-full max-sm:w-full h-[159px] xl:h-[143px] md:h-[86px] sm:h-[50px] max-sm:h-[50px] overflow-hidden z-30 bg-white border border-[#c5c5c5] md:rounded-[31px] md:mb-[40px]">
            {/* <div class="before:absolute before:w-[473px] before:h-[472px] xl:before:w-[425px] xl:before:h-[424px] md:before:w-[255px] md:before:h-[254px] sm:before:w-[119px] sm:before:h-[118px] max-sm:before:w-[119px] max-sm:before:h-[118px] before:left-[-205px] before:top-[-270px] xl:before:left-[-184.5px] xl:before:top-[-243px] md:before:left-[-111px] md:before:top-[-146px] sm:before:left-[-54px] sm:before:top-[-62px] max-sm:before:left-[-54px] max-sm:before:top-[-62px] before:rounded-full before:bg-[#ff2f80] before:z-10"></div> */}
            {/* <div class="after:absolute after:w-[473px] after:h-[472px] xl:after:w-[425px] xl:after:h-[424px] md:after:w-[255px] md:after:h-[254px] sm:after:w-[119px] sm:after:h-[118px] max-sm:after:w-[119px] max-sm:after:h-[118px] after:top-[42px] after:left-[1198px] xl:after:top-[38px] xl:after:left-[1078px] md:after:top-[23px] md:after:left-[647px] sm:after:top-[30%] sm:after:right-[10%]  max-sm:after:top-[30%] max-sm:after:left-[85%] after:rounded-full after:bg-[#ff2f80]"></div> */}
            {/* <div className="flex flex-row items-center justify-between z-20 w-fit">
                <img
                    className="w-[136px] xl:w-[122px] md:w-[73.5px] sm:w-[34.5px] max-sm:w-[34.5px]"
                    src="./img/camp_context_banner.png"
                    alt="cam_context_icon"
                />
                <div className="bg-white z-30 w-[1px] h-[94px]"></div>
            </div> */}
            <div className="relative w-[100px] md:w-[200px] overflow-hidden h-full">
                <div className="flex justify-start pl-2 md:pl-3 gap-1 sm:gap-2 md:gap-3 py-4 items-center top-0 left-0 w-full h-full z-30 ">
                    <img
                        className="md:w-[73.5px] sm:w-[34.5px] max-sm:w-[34.5px] z-30"
                        src="./img/camp_context_banner.png"
                        alt="cam_context_icon"
                    />
                    <div className="bg-white/60 w-[1px] h-full z-30"></div>
                </div>
                <div className="absolute top-0 left-0 w-full h-[110%] bg-[#ff2f80] pl-4 flex py-2 -mb-10 md:py-4 gap-2 items-center rounded-br-full"></div>
            </div>
            <div className="flex justify-center items-center w-full">
                <p className="text-[30px] xl:text-[27px] md:text-[16px] sm:text-[10px] max-sm:text-[10px] font-semibold ">
                    Get and gift an exclusive 1800 Digital flower collectible
                    NFT for watching this video
                </p>
            </div>
            <div className="relative h-full overflow-hidden w-[80px] sm:w-[70px] md:w-[120px]">
                <div className="absolute -right-2 md:-right-4 top-3 md:top-4 w-full h-full flex justify-center items-center">
                    <img
                        className="2xl:w-[41px] z-30 xl:w-[35px] md:w-[24px] sm:w-[20px] max-sm:w-[20px] "
                        src="./img/camp_context_info.png"
                        alt="camp_context_info"
                    />
                </div>
                <div className="absolute z-20 top-3 right-0 md:-right-6 bg-[#ff2f80] w-[70px] md:w-[120px] h-full rounded-tl-full flex pl-6 items-center mt-1 md:-mb-0 -mr-6"></div>
            </div>
            {/* <div className="2xl:mt-[90px] xl:mt-[90px] md:mt-[50px] sm:mt-[25px] max-sm:mt-[25px] z-30 w-fit">
                <img
                    className="2xl:w-[41px] xl:w-[35px] md:w-[24px] sm:w-[20px] max-sm:w-[20px]"
                    src="./img/camp_context_info.png"
                    alt="camp_context_info"
                />
            </div> */}
        </div>
    );
}
