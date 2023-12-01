import React from "react";

export default function ConnectWalletButton({ onClick }) {
    return (
        <button
            className="bg-primary flex items-center justify-center rounded-[60px] p-3 w-full z-20"
            onClick={onClick}
        >
            <div className="text-white text-h3 font-medium">Connect Wallet</div>
        </button>
    );
}
