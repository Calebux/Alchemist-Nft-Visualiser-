import logo from "../assets/alchemist_logo_sq.png";
function AlchemistHeader() {
  return (
    <div className="pb-[21px] border-b-[0.5px] border-b-[#c4c4c4] gap-x-4 text-black dark:text-white flex items-center">
      <img src={logo} className="w-[80px] h-[80px]" alt="" />
      <h3 className="text-xl leading-6 font-extrabold">Alchemist 4.0</h3>
    </div>
  );
}

export default AlchemistHeader;
