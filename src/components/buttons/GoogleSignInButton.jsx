import React from "react";

export default function GoogleSignInButton({ onClick }) {
    return (
        <button
            className="border border-[#FF2F80] flex items-center rounded-[60px] p-1 w-full z-20"
            onClick={onClick}
        >
            <div className="rounded-full bg-white p-2">
                <img src="/img/google.png" width={"26px"} alt="google-icon" />
            </div>
            <div className="text-center text-dark text-[20.5px] font-medium ps-2">
                Sign in with Google
            </div>
        </button>
    );
}
