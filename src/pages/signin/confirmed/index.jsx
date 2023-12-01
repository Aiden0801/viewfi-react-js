import { Link } from "react-router-dom";
import ModalHeader from "../../../components/modals/ModalHeader";
import ModalFooter from "../../../components/modals/ModalFooter";
import LearnMoreButton from "../../../components/buttons/LearnMoreButton";

const SigninConfirmed = () => {
    return (
        <>
            <div className="-m-6 z-10 p-4 flex flex-col h-[293px] py-2 -mb-10 md:py-4 gap-2 bg-[url('./assets/img/forest.png')] bg-cover">
                <ModalHeader text={"Entry Confirmed"} />
                <div className="flex flex-col ms-12 gap- z-20 text-white">
                    <div className="flex items-center gap-2 text-h0">
                        ONE
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
                    <div className="text-h0">MILLION</div>
                    <div className="text-h0">TREES</div>
                </div>
            </div>
            <div className="text-sm font-normal text-slate-900 z-20 mt-8">
                Success. You’ve been entered into the competition. The draw date
                is on 16 October 2023. Good luck!
            </div>
            <LearnMoreButton />
            <div className="text-slate-700 text-sm font-normal font-['Clash Display']">
                Share video with friends
            </div>
            <div className="flex sm:gap-4 gap-8">
                <svg
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="15.4858"
                        cy="15.4858"
                        r="15.4858"
                        fill="#FF2F80"
                    />
                    <path
                        d="M17.1173 14.1983L23.4459 7H21.9463L16.4511 13.2502L12.0621 7H7L13.637 16.4514L7 24H8.49977L14.3028 17.3996L18.9379 24H24L17.1169 14.1983H17.1173ZM15.0632 16.5347L14.3907 15.5936L9.04016 8.10473H11.3437L15.6617 14.1485L16.3341 15.0896L21.947 22.9455H19.6434L15.0632 16.5351V16.5347Z"
                        fill="white"
                    />
                </svg>
                <svg
                    width="32"
                    height="31"
                    viewBox="0 0 32 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="16.2875"
                        cy="15.4858"
                        r="15.4858"
                        fill="#EFF1F7"
                    />
                    <path
                        d="M16.9327 12.5822V10.2594C16.9327 9.61825 17.453 9.09793 18.0941 9.09793H19.2556V6.19434H16.9327C15.0082 6.19434 13.4484 7.75415 13.4484 9.67865V12.5822H11.1255V15.4858H13.4484V24.7773H16.9327V15.4858H19.2556L20.417 12.5822H16.9327Z"
                        fill="#344860"
                    />
                </svg>
                <svg
                    width="32"
                    height="31"
                    viewBox="0 0 32 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="16.0891"
                        cy="15.4858"
                        r="15.4858"
                        fill="#EFF1F7"
                    />
                    <path
                        d="M24.1364 7.43892C22.4773 5.7798 19.7776 5.77945 18.1182 7.43801L18.1186 7.43835L15.4933 10.0641L16.7051 11.2758L19.3309 8.64939L19.3307 8.64916C20.3221 7.65942 21.9338 7.66 22.9246 8.65076C23.9155 9.64153 23.9154 11.254 22.9246 12.2452L18.9846 16.1849C18.5046 16.665 17.8664 16.9294 17.1876 16.9294C16.5087 16.9294 15.8704 16.665 15.3904 16.1849L14.1786 17.3967C14.9823 18.2004 16.051 18.6431 17.1877 18.6431C18.3243 18.6431 19.393 18.2004 20.1964 17.3967L24.1365 13.4569C25.7953 11.7974 25.7953 9.09771 24.1364 7.43892Z"
                        fill="#344860"
                    />
                    <path
                        d="M12.8481 22.322C11.857 23.3125 10.2446 23.3123 9.25369 22.3214C8.26281 21.3303 8.26281 19.7175 9.25357 18.7265L13.1931 14.787C14.1842 13.796 15.7967 13.796 16.7876 14.787L17.9996 13.5753C16.3402 11.916 13.6405 11.9159 11.9814 13.5753L8.04162 17.5148C6.38284 19.1741 6.38284 21.8739 8.04173 23.5332C8.87153 24.3629 9.96123 24.7778 11.0512 24.7776C12.1407 24.7776 13.2304 24.363 14.0597 23.5338L14.0599 23.5337L16.6858 20.9071L15.4739 19.6954L12.8481 22.322Z"
                        fill="#344860"
                    />
                </svg>
                <svg
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="15.5142"
                        cy="15.4858"
                        r="15.4858"
                        fill="#EFF1F7"
                    />
                    <path
                        d="M23.1724 8.94727H7.85593C6.95647 8.94727 6.22266 9.68028 6.22266 10.5805V21.469C6.22266 22.3662 6.9532 23.1023 7.85593 23.1023H23.1724C24.0696 23.1023 24.8057 22.3717 24.8057 21.469V10.5805C24.8057 9.68333 24.0751 8.94727 23.1724 8.94727ZM22.9468 10.0361L15.5488 17.4342L8.08673 10.0361H22.9468ZM7.3115 21.2435V10.8008L12.5554 15.9997L7.3115 21.2435ZM8.08143 22.0134L13.3286 16.7663L15.1672 18.5891C15.38 18.8001 15.7235 18.7994 15.9354 18.5874L17.7281 16.7947L22.9469 22.0134H8.08143ZM23.7168 21.2435L18.4981 16.0248L23.7168 10.806V21.2435Z"
                        fill="#344860"
                    />
                </svg>
            </div>
            <Link
                className="text-slate-900 text-xs font-normal underline leading-snug flex flex-row-reverse -mb-6"
                to={"/dashboard"}
            >
                T&C’s apply
            </Link>
            <ModalFooter />
        </>
    );
};

export default SigninConfirmed;
