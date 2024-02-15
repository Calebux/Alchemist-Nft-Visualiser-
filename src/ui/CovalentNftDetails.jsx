import { CiShare1 } from "react-icons/ci";
import avatar from "../assets/covalentAvatar.png";
import { IoIosMore } from "react-icons/io";
import CreatorStats from "./CreatorStats";
import { useState } from "react";
import { createPortal } from "react-dom";
import ShareModal from "./ShareModal";
import ethLogo from "../assets/eth.svg";
import { GoDownload } from "react-icons/go";
import { SlPicture } from "react-icons/sl";
import opensea from "../assets/opensea.svg";
import report from "../assets/report.svg";
import { IoCopyOutline } from "react-icons/io5";
function CovalentNftDetails() {
  const [isSharing, setIsSharing] = useState(false);
  const [moreIsOpen, setMoreIsOpen] = useState(false);

  return (
    <div className="flex lg:flex-row flex-col gap-y-4 lg:items-center justify-between border-b-[0.5px] border-b-[#c4c4c4] pb-[21px] pt-7">
      {isSharing &&
        createPortal(<ShareModal setIsOpen={setIsSharing} />, document.body)}
      <div>
        <div className="flex items-center gap-x-4">
          <div className="flex items-center gap-x-2 text-base lg:text-[28px] font-semibold leading-6 text-black dark:text-white">
            <img src={avatar} className="lg:w-auto lg:h-auto w-[20px] h-[20px]" alt="" />
            <h4>Covalent</h4>
          </div>
          <div className="flex items-center gap-x-2 text-sm lg:text-base">
            <button
              className="flex lg:h-[35px] w-6 h-6 lg:w-[35px] items-center justify-center rounded-[5px] bg-[#c4c4c4] dark:bg-black"
              onClick={() => {
                setMoreIsOpen(false);
                setIsSharing(true);
              }}
            >
              <CiShare1 className="text-black dark:text-white " />
            </button>
            <button
              className="relative flex lg:h-[35px] h-6 w-6 lg:w-[35px] items-center justify-center rounded-[5px] bg-[#c4c4c4] dark:bg-black"
              onClick={() => setMoreIsOpen((show) => !show)}
            >
              <IoIosMore className="text-black dark:text-white " />
              {moreIsOpen && (
                <div className="absolute left-[0px] top-[39px] z-[400] h-fit w-[240px] sm:w-[300px] rounded-md bg-white p-4  text-[#121212] shadow-md dark:bg-black dark:text-white dark:shadow-none">
                  <button
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2 hover:bg-[#c4c4c4] hover:text-white dark:hover:bg-[#ffffff] dark:hover:text-black"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        "0xfeee3700698f8d75bcc18e009022c7b44d2af44f",
                      );
                    }}
                  >
                    <div className="flex items-center gap-x-2">
                      <img src={ethLogo} alt="" className="h-4 w-4" />
                      0xfeee...f44f
                    </div>
                    <IoCopyOutline />
                  </button>
                  <button className="flex w-full items-center justify-between rounded-lg px-3 py-2 hover:bg-[#c4c4c4] hover:text-white dark:hover:bg-[#ffffff] dark:hover:text-black">
                    <div className="flex items-center gap-x-2">
                      <GoDownload className="lg:h-4 h-3 w-3 lg:w-4" />
                      Download
                    </div>
                  </button>
                  <button className="flex w-full items-center justify-between rounded-lg px-3 py-2 hover:bg-[#c4c4c4] hover:text-white dark:hover:bg-[#ffffff] dark:hover:text-black">
                    <div className="flex items-center gap-x-2">
                      <SlPicture className="lg:h-4 h-3 w-3 lg:w-4" />
                      View token thumbnail
                    </div>
                  </button>
                  <div className="mt-2 border-t-[0.5px] border-t-white pt-2">
                    <a href="https://opensea.io/collection/alchemist-program-4-0" className="flex w-full items-center justify-between rounded-lg px-3 py-2 hover:bg-[#c4c4c4] hover:text-white dark:hover:bg-[#ffffff] dark:hover:text-black">
                      <div className="flex items-center gap-x-2">
                        <img src={opensea} alt="" className="lg:h-4 h-3 w-3 lg:w-4" />
                        Opensea
                      </div>
                    </a>
                    <button className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-red-600 hover:bg-[#c4c4c4] hover:text-red-600 dark:hover:bg-[#ffffff]">
                      <div className="flex items-center gap-x-2">
                        <img src={report} alt="" className="lg:h-4 h-3 w-3 lg:w-4" />
                        Report
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </button>
          </div>
        </div>
        <p className="mt-3 lg:w-[430px] text-xs sm:text-sm font-normal leading-6 text-[#121212] dark:text-white">
          Special-made NFTs for Alchemists that have shown above and beyond
          contributions to the ecosystem and community. These are available for
          a limited time for version Alchemist 4.0.
        </p>
      </div>
      <CreatorStats />
    </div>
  );
}

export default CovalentNftDetails;
