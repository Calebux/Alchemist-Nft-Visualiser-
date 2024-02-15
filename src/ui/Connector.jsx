import { CiLogin } from "react-icons/ci";

function Connector() {
  return (
    <>
      <button className="hidden rounded-[5px] bg-[#FF4B8B] px-[46px] py-[10px] text-base font-bold leading-6 text-white lg:flex">
        Connect wallet
      </button>
      <button className="flex lg:hidden">
        <CiLogin className="h-4 w-4 text-white lg:h-[1.8rem] lg:w-[1.8rem]" />
      </button>
    </>
  );
}

export default Connector;
