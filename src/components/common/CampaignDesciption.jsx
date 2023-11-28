import React from "react";
import RewardButton from '../../components/common/RewardButton'

export default function CampaignDesciption({handleModal , handleVideoShow}) {
  const handleClick = () => {
    handleModal(true);
    handleVideoShow(false);
  };  
  return (
    <div className="camp_desc">
      <div className="camp_desc_left">
        <img
          src="./img/camp_context_banner.png"
          alt="camp_desc_banner"
          id="camp_desc_banner"
        />
        <div className="camp_desc_border"></div>
        <div className="camp_desc_text">
          <p>Nike Rewards</p>
          <p>Claim your reward by clicking the claim now button</p>
        </div>
      </div>
      <div>
        <RewardButton text={"Reward in 15"} imageURL={"./img/camp_reward.png"} handleClick={handleClick}/>
      </div>

    </div>
  );
}
