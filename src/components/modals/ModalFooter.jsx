import { Link } from "react-router-dom";

const ModalFooter = () => {
    return (
        <div className="flex items-center w-full justify-between p-4 border-t border-[#d7d7d7] mt-6">
            <div className="text-[9px] font-normal text-[#02172E]">
                <Link className="underline" to={"/dashboard"}>
                    Privacy Policy
                </Link>
            </div>
            <div className="flex items-center gap-1">
                <div>
                    <img src="/img/viewfi_icon.png" alt="viewfi_icon" />
                </div>
                <div className="flex text-[11px]">
                    Powered by{" "}
                    <Link className="underline" to={"/dashboard"}>
                        Viewfi
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ModalFooter;
