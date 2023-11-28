import React from "react";

export default function Button({ handleClick , text, imageURL}) {
  return (
    <button
      onClick={handleClick}
      className={"btn_default flex bg-[#FF2F80] justify-between items-center"}
    >
      <div>{text}</div>
      <div>
        <img src={imageURL} className="i_play" alt="btn_icon" />
      </div>
    </button>
  );
}
