/* eslint-disable react/prop-types */
import { useState } from "react";
import twitter from "../assets/twitter.svg";
import x from "../assets/x.svg";
import warpcast from "../assets/warpcast.svg";
import hey from "../assets/hey.svg";
import { IoIosClose } from "react-icons/io";
function ShareModal({ setIsOpen }) {
  const [link] = useState(
    "https://zora.co/collect/zora:0xfeee3700698f8d75bcc18e009022c7b44d2af44f",
  );
  return (
    <div
      className="absolute inset-0 flex justify-center bg-black bg-opacity-30 pt-[140px] backdrop-blur-sm"
      onClick={() => setIsOpen(false)}
    >
      <div className="relative h-fit w-[500px] rounded-lg bg-white p-5 text-[#121212] dark:bg-black dark:text-white">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-5 top-5 text-[28px]"
        >
          <IoIosClose />
        </button>
        <h2 className="text-[22px] font-bold">Share</h2>
        <div className="mb-4 mt-4 flex items-center gap-x-3">
          <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#333]">
            <img src={x} alt="" />
          </div>
          <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#8660cd]">
            <img src={warpcast} alt="" />
          </div>
          <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#3d4b41]">
            <img src={hey} alt="" />
          </div>
          <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#229ed9]">
            <img src={twitter} alt="" />
          </div>
        </div>
        <div className="grid grid-cols-[auto_80px] gap-x-3">
          <input
            type="text"
            disabled={true}
            value={link.slice(0, 32).concat("...")}
            className="w-full rounded-md border-[#f9f9f9] px-2 py-2 text-lg text-[#121212] disabled:cursor-not-allowed dark:text-white"
          />
          <button
            className="rounded bg-[#FF4B8B] px-4 py-2 font-medium text-white dark:bg-white dark:text-black"
            onClick={() => {
              navigator.clipboard.writeText(link);
            }}
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShareModal;
