import ClaimButton from "../../components/buttons/ClaimButton";
import ModalHeader from "../../components/modals/ModalHeader";
import { useNavigate } from "react-router-dom";
import ModalFooter from "../../components/modals/ModalFooter";

const Claim = () => {
    const navigate = useNavigate();
    const handleClickClaim = () => {
        navigate("/signin");
    };

    return (
        <>
            <div className="absolute z-10 top-[-222px] left-[-31px] sm:w-[473px] h-[473px] w-[110%]  bg-[#ff2f80] pl-4 flex py-2 -mb-10 md:py-4 gap-2 items-center rounded-full"></div>
            <ModalHeader text={"Nike Rewards"} />
            <div className="z-20 w-[264px] h-[264px] ms-auto me-auto">
                <img src="/img/chat_reward.png" alt="chat_reward" />
            </div>
            <div className="h-[0.1px] w-full px-3 bg-[#02172E]"></div>
            <div className="text-[25px] text-[#3A5471] font-semibold">
                Reward Unlocked
            </div>
            <ClaimButton onClick={handleClickClaim} />
            <div className="m-auto h-[0.1px] w-[125px] px-3 bg-[#02172E]"></div>
            <div className="flex justify-center items-center gap-2">
                <img src="/img/learn_more_info.png" alt="learn_more_info" />
                <div className="font-normal text-[11px] text-[#9CA6B2]">
                    Learn More
                </div>
            </div>
            <ModalFooter />
        </>
    );
};

export default Claim;
