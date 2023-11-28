import React from "react";
import ModalHeader from "./ModalHeader";
import ClaimButton from "./ClaimButton";
// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <div className="claim_modal">
      <ModalHeader />
      <div className="chat_reward">
        <img src="./img/chat_reward.png" alt="chat_reward" />
      </div>
      <div className="flex flex-col items-start gap-4">
        <div className="chat_reward_border"></div>
        <div className="reward_unlocked">Reward Unlocked</div>
      </div>
      <div>
        <ClaimButton />
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="learn_more_border"></div>
        <div className="flex justify-around items-center gap-2">
          <img src="./img/learn_more_info.png" alt="learn_more_info"/>
          <div className="learn_more_text">Learn More</div>
        </div>
      </div>
      <div className="modal_footer">
        <div className="privacy">
          Privacy Policy
        </div>
        <div className="flex justify-around items-center gap-2">
          <div><img src="./img/viewfi_icon.png" alt="viewfi_icon"/></div>
          <div className="viewfi">Powered by <p>Viewfi</p></div>
        </div>
      </div>
    </div>
  );
}
