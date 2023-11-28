import React from "react";

export default function ModalHeader() {
  return (
    <div className="modal_header">
      <div className="flex justify-between items-center gap-2">
        <img
          src="./img/modal_header_competition.png"
          alt="modal_header_competition"
        />
        <div>Nike Rewards</div>
      </div>

      <div className="close_icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="11"
          viewBox="0 0 12 11"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.49217 5.49994L11.4597 1.53234C11.8103 1.182 11.8103 0.613499 11.4597 0.262928C11.1089 -0.0876427 10.5407 -0.0876427 10.1901 0.262928L6.22254 4.23053L2.25521 0.262928C1.90464 -0.0876427 1.33615 -0.0876427 0.985582 0.262928C0.635014 0.613499 0.635014 1.182 0.985582 1.53234L4.95314 5.49994L0.985582 9.46754C0.635014 9.81789 0.635014 10.3864 0.985582 10.737C1.16087 10.9122 1.39046 11 1.62028 11C1.8501 11 2.07993 10.9122 2.25521 10.737L6.22254 6.76936L10.1901 10.737C10.3654 10.9122 10.595 11 10.8248 11C11.0546 11 11.2842 10.9122 11.4597 10.737C11.8103 10.3864 11.8103 9.81789 11.4597 9.46754L7.49217 5.49994Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}
