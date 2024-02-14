import sampleImg from "../assets/nft-sample-img.png";
import avatar from "../assets/covalentAvatar.png";
import { GoPlusCircle } from "react-icons/go";

function NftCard() {
  return (
    <div className="nft-card relative rounded-[5px] border-[0.5px] border-[#C4C4C4] p-[10px]">
      <img src={sampleImg} className="h-[400px] w-[300px] rounded-sm" alt="" />
      <div className="absolute bottom-[10px] left-[10px] right-[10px] rounded-e-sm bg-[#0D0E2E] !bg-opacity-90  text-white dark:bg-[#0D0D0D] dark:bg-opacity-90">
        <div className="p-2">
          <div className="flex items-center gap-x-2 text-[10px] font-extrabold leading-6 ">
            <img src={avatar} className="h-5 w-5" alt="" />
            <h4>Covalent</h4>
          </div>
          <div className="mt-1 flex items-center justify-between">
            <h2 className="text-base font-bold leading-6">
              Sythe Alchemist Character
            </h2>
            <h4 className="flex items-center gap-x-[5px] text-xs font-normal leading-6">
              <GoPlusCircle className="text-base" />3
            </h4>
          </div>
          <div className="mt-2 flex items-center justify-between text-xs font-normal leading-6">
            <h2 className="leading-4">Mint start</h2>
            <h4 className="">17 Jan 2024</h4>
          </div>
        </div>
        <button className="mint-btn hidden w-full cursor-pointer items-center justify-center bg-white py-[10px] text-center text-xs font-semibold leading-6 text-[#0D0D0D] dark:bg-[#0A0A23] dark:text-white">
          Mint now
        </button>
      </div>
    </div>
  );
}

export default NftCard;
