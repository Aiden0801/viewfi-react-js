import ModalHeader from "../../components/modals/ModalHeader";
import ModalFooter from "../../components/modals/ModalFooter";
import EmailSignInButton from "../../components/buttons/EmailSignInButton";
import GoogleSignInButton from "../../components/buttons/GoogleSignInButton";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signin = () => {
    const navigate = useNavigate();
    const handleClickSignin = () => {
        navigate("/signin/confirmed");
    };
    const handleClickEmail = () => {
        navigate("/signin/confirmed");
    };

    return (
        <>
            <div className="absolute z-10 top-[-171px] left-[-90px] sm:w-[473px] sm:h-[473px] w-[130%] h-[550px]  bg-primary pl-4 flex py-2 -mb-10 md:py-4 gap-2 items-center rounded-full"></div>
            <ModalHeader text={"Nike Rewards"} />
            <div className="flex items-center justify-between z-20 w-full">
                <div className="text-h3 text-white font-normal">
                    <p>Check to agree to our </p>
                    <Link className="underline" to={"/dashboard"}>
                        terms of use
                    </Link>
                </div>
                <input type="checkbox" />
            </div>
            <div className="text-white text-sm font-normal z-20 mb-12">
                By signing up, you consent to the transfer of your data to
                [company name] who may use it for communication purposes and you
                consent for your information to be stored in the USA.
            </div>
            <GoogleSignInButton onClick={handleClickSignin} />
            <div className="text-h3 font-normal">Or enther with email</div>
            <input
                type="text"
                className="border-[0.5px] rounded-[59px] border-[rgb(2 23 46, 1)] px-4 py-3 w-full"
                placeholder="enter email..."
            />
            <EmailSignInButton onClick={handleClickEmail} />
            <ModalFooter />
        </>
    );
};

export default Signin;
