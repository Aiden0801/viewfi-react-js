import React from "react";

export default function CampaignContext() {
  return (
    <div className="camp_context">
      <div className="flex items-center justify-between gap-1 sm:gap-2 md:gap-3 xl:gap-5">
        <img
          src="./img/camp_context_banner.png"
          id="camp_context_banner"
          alt="cam_context_icon"
        />
        <div className="border-r-banner"></div>
      </div>
      <div className="camp_context_desc">
        Get and gift an exclusive 1800 Digital flower collectible NFT for
        watching this video
      </div>
      <div>
        <img
          src="./img/camp_context_info.png"
          id="camp_context_info"
          alt="camp_context_info"
        />
      </div>
    </div>
  );
}
