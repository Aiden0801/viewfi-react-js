import ModalHeader from "../../components/modals/ModalHeader";
import ModalFooter from "../../components/modals/ModalFooter";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ConnectWalletButton from "../../components/buttons/ConnectWalletButton";

const ConnectWallet = () => {
    const navigate = useNavigate();

    const handleConnectWallet = () => {
        navigate("/signin/confirmed");
    };

    return (
        <>
            <div className="flex flex-col -m-6 z-10 h-[293px] px-4 py-2 -mb-10 md:py-4 gap-2 items-center bg-[url('./assets/img/Ellipse.png')] bg-cover">
                <ModalHeader text={"Claim Now"} />
                <div className="flex flex-col gap-1 z-20 text-white">
                    <div className="flex items-center gap-2 mt-6 text-h0">
                        <svg
                            width="25"
                            height="29"
                            viewBox="0 0 25 29"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M24.1538 25.3467L19.4128 18.2471H22.0608L17.295 11.1077H19.9164L12.5 0L5.08274 11.1077H7.70413L2.93838 18.2471H5.58633L0.846191 25.3467H11.5867V29H12.0434H12.9567H13.4134V25.3467H24.1538ZM7.97141 16.9887H5.32437L10.0893 9.85105H7.46788L12.5 2.31519L17.5313 9.85105H14.909L19.6756 16.9887H17.0277L21.7687 24.0891H12.9567V21.9712L16.5277 17.8914L15.84 17.2896L12.9567 20.5854V17.2206L15.8365 13.9292L15.1489 13.3283L12.9567 15.8338V9.71211H12.0434V15.8329L9.8512 13.3283L9.16353 13.9292L12.0434 17.2205V20.5844L9.16002 17.2896L8.47325 17.8914L12.0434 21.9712V24.0891H3.23127L7.97141 16.9887Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <div className="text-h3 font-normal mt-8">Connected Email</div>
                <div className="flex items-center justify-between border rounded-full p-1 border-cdark">
                    <div className=" text-h3 font-medium ps-2 text-center w-full">
                        LED4...@GMAIL.COM
                    </div>
                    <div className="border rounded-full bg-primary p-3">
                        <svg
                            width="14"
                            height="13"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2.77163 8.70661C2.31404 9.13369 2.28931 9.85085 2.71639 10.3084C3.14347 10.766 3.86063 10.7907 4.31822 10.3637L2.77163 8.70661ZM13.1776 1.64086C13.1992 1.01531 12.7095 0.490717 12.084 0.469146L1.89004 0.117631C1.26449 0.0960606 0.739891 0.585683 0.718321 1.21123C0.69675 1.83679 1.18637 2.36138 1.81192 2.38295L10.8732 2.69541L10.5607 11.7567C10.5392 12.3822 11.0288 12.9068 11.6543 12.9284C12.2799 12.95 12.8045 12.4604 12.8261 11.8348L13.1776 1.64086ZM4.31822 10.3637L12.8182 2.43034L11.2716 0.773277L2.77163 8.70661L4.31822 10.3637Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="m-auto w-1/2 h-[1px] bg-clightdark"></div>
            <div className="flex flex-col gap-1">
                <div className="text-h3 font-normal">Connect Wallet</div>
                <ConnectWalletButton onClick={handleConnectWallet} />
            </div>
            <div className="text-h3 font-normal">
                Don't have a wallet?{" "}
                <Link to={"/dashboard"} className="underline">
                    Click here
                </Link>
            </div>
            <ModalFooter />
        </>
    );
};

export default ConnectWallet;
