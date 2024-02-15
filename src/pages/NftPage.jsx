import { useEffect, useState } from "react";
import { useNft } from "../context/NftContext";
import { createPortal } from "react-dom";
import ShareModal from "../ui/ShareModal";
import { CiShare1 } from "react-icons/ci";
import { IoIosMore } from "react-icons/io";
import { IoCopyOutline } from "react-icons/io5";
import { GoDownload } from "react-icons/go";
import { SlPicture } from "react-icons/sl";
import opensea from "../assets/opensea.svg";
import ethLogo from "../assets/eth.svg";
import report from "../assets/report.svg";
import alchemistLogo from "../assets/alchemist_logo_sq.png";
import avatar from "../assets/covalentAvatar.png";
import CreatorStat from "../ui/CreatorStat";
import { useNavigate } from "react-router-dom";

function NftPage() {
  const { currentNft } = useNft();
  // console.log(currentNft);

  const [isSharing, setIsSharing] = useState(false);
  const [moreIsOpen, setMoreIsOpen] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);
  // const [currentNft, setCurrentNft] = useState(null);
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(
    new Date("2024-02-02T00:00:00Z"),
  );

  useEffect(() => {
    if (!currentNft) {
      navigate("/");
      return;
    }
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime((prevTime) => new Date(prevTime.getTime() + 1000));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="grid grid-cols-[1fr] gap-[43px] lg:grid-cols-[1fr_1fr]">
      {isSharing &&
        createPortal(<ShareModal setIsOpen={setIsSharing} />, document.body)}
      <div className="overflow-hidden rounded-lg lg:h-[600px] lg:w-[600px]">
        <video
          src={`https://ipfs.decentralized-content.com/ipfs/${currentNft?.external_data.animation_url.slice(7)}`}
          preload="auto"
          autoPlay
          loop
          muted
          className={videoLoading ? "hidden" : ""}
          onLoadedData={() => setVideoLoading(false)}
        ></video>
        {videoLoading && (
          <div className="flex h-full w-full items-center justify-center text-white">
            <h1 className="flex">Loading...</h1>
          </div>
        )}
      </div>
      <div className="w-full text-[#121212] dark:text-white">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-base font-medium leading-6 lg:text-[28px] lg:font-extrabold">
            {currentNft?.external_data.name}
          </h1>
          <div className="flex items-center gap-x-2">
            <button
              className="flex h-6 w-6 items-center justify-center rounded-[5px] bg-[#c4c4c4] dark:bg-black lg:h-[35px] lg:w-[35px]"
              onClick={() => {
                setMoreIsOpen(false);
                setIsSharing(true);
              }}
            >
              <CiShare1 className="text-black dark:text-white " />
            </button>
            <button
              className="relative flex h-5 w-5 items-center justify-center rounded-[5px] bg-[#c4c4c4] dark:bg-black lg:h-[35px] lg:w-[35px]"
              onClick={() => {
                setIsSharing(false);
                setMoreIsOpen((show) => !show);
              }}
            >
              <IoIosMore className="text-black dark:text-white " />
              {moreIsOpen && (
                <div className="absolute left-[-265px] top-[39px] z-[400] h-fit w-[300px] rounded-md bg-black p-4 text-white">
                  <button
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2 hover:bg-[#ffffff] hover:text-black"
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
                  <button className="flex w-full items-center justify-between rounded-lg px-3 py-2 hover:bg-[#ffffff] hover:text-black">
                    <div className="flex items-center gap-x-2">
                      <GoDownload className="h-4 w-4" />
                      Download
                    </div>
                  </button>
                  <button className="flex w-full items-center justify-between rounded-lg px-3 py-2 hover:bg-[#ffffff] hover:text-black">
                    <div className="flex items-center gap-x-2">
                      <SlPicture className="h-4 w-4" />
                      View token thumbnail
                    </div>
                  </button>
                  <div className="mt-2 border-t-[0.5px] border-t-white pt-2">
                    <a
                      href={`https://opensea.io/assets/zora/0xfeee3700698f8d75bcc18e009022c7b44d2af44f/${currentNft.token_id.toString().slice(0, 2)}`}
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2 hover:bg-[#ffffff] hover:text-black"
                    >
                      <div className="flex items-center gap-x-2">
                        <img src={opensea} alt="" className="h-4 w-4" />
                        Opensea
                      </div>
                    </a>
                    <button className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-red-600 hover:bg-[#ffffff] hover:text-red-600">
                      <div className="flex items-center gap-x-2">
                        <img src={report} alt="" className="h-4 w-4" />
                        Report
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </button>
          </div>
        </div>
        <div className="flex gap-x-[22px]">
          <div className="relative h-fit w-fit">
            <img
              src={alchemistLogo}
              className="h-10 w-10 rounded-[5px] lg:h-[50px] lg:w-[50px]"
              alt=""
            />
            <img
              src={avatar}
              className="absolute bottom-[-6px] right-[-12px] z-[60] h-5 w-5 lg:h-6 lg:w-6"
              alt=""
            />
          </div>
          <div>
            <h2 className="text-sm font-semibold leading-6 lg:text-xl">
              Alchemist 4.0
            </h2>
            <h3 className="text-sm font-semibold leading-6 text-[#928b8b]">
              Covalent
            </h3>
          </div>
        </div>
        <div className="mb-5 mt-[20px] w-full rounded-[10px] border-[0.5px] border-[#c4c4c4] p-[10px] px-2 dark:border-white lg:px-4">
          <div className="flex items-center justify-between ">
            <h3 className="text-sm font-semibold leading-6 sm:text-base">
              Description
            </h3>
            <h6 className="text-sm font-semibold leading-6 text-[#ff4b8b]">
              Video : 14.56mb
            </h6>
          </div>
          <p className="mt-2 text-justify text-xs font-normal leading-6">
            {currentNft?.external_data.description}
          </p>
        </div>

        <div className="flex justify-between rounded-t-[10px] bg-[#ff4b8b] bg-opacity-10 px-3 pb-7 pt-4 sm:px-9">
          <CreatorStat statName={"First minter"}>
            <img src={avatar} className="h-3 w-3" alt="" />
            Covalent
          </CreatorStat>
          <CreatorStat statName={"Top minter"}>
            <img src={avatar} className="h-3 w-3" alt="" />
            Covalent x16
          </CreatorStat>
          <CreatorStat statName={"Unique minters"}>16</CreatorStat>
          <CreatorStat statName={"Mint start"}>17th Jan 2024.</CreatorStat>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-y-3 rounded-b-[10px] bg-[#0a0a23] px-4 pb-[48px] pt-[32px]">
          <a
            className="w-full rounded-[5px] bg-[#ff4b8b] py-[15px] text-center text-sm font-bold leading-6 text-white lg:w-[314px] lg:text-base"
            href={`https://opensea.io/assets/zora/0xfeee3700698f8d75bcc18e009022c7b44d2af44f/${currentNft?.token_id.toString().slice(0, 2)}`}
          >
            Opensea
          </a>
          <h1 className="text-white">
            {Math.floor(Math.abs(new Date() - currentTime) / 1000 / 86400)}d{" "}
            {Math.floor(
              ((Math.abs(new Date() - currentTime) / 1000) % 86400) / 3600,
            )}
            h{" "}
            {Math.floor(
              ((Math.abs(new Date() - currentTime) / 1000) % 3600) / 60,
            )}
            m {Math.floor((Math.abs(new Date() - currentTime) / 1000) % 60)}s
          </h1>

          <div className="mt-8 w-full text-white dark:text-white lg:w-[80%]">
            <div className="grid grid-cols-[1fr_1fr]">
              <div className="w-full border-b-[0.5px] border-b-[#333] pb-2 text-center">
                0 comments
              </div>
              <div className="w-full border-b-[0.5px] border-b-white pb-2 text-center">
                2 Activity
              </div>
            </div>
            <div className="pt-5 text-center">
              <h4 className="text-center">No comments yet!</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NftPage;
