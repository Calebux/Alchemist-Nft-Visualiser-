import logo from "../assets/alchemist_logo_sq.png";
function AlchemistHeader() {
  return (
    <div className="flex items-center gap-x-4 border-b-[0.5px] border-b-[#c4c4c4] pb-[21px] text-black dark:text-white">
      <img src={logo} className="h-10 w-10 lg:h-[80px] lg:w-[80px]" alt="" />
      <h3 className="text-base font-extrabold leading-6 lg:text-xl">
        Alchemist 4.0
      </h3>
    </div>
  );
}

export default AlchemistHeader;
