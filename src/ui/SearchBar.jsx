import { CiSearch } from "react-icons/ci";

function SearchBar() {
  return (
    <div className="relative">
      <input
        type="text"
        className="w-[545px] rounded-[5px] py-3 px-4 text-sm border-[0.5px] border-[#918b8b] dark:border-[#c4c4c4] leading-6 bg-white dark:bg-[#0d0d0d] text-[#918b8b] dark:text-white"
        placeholder="Search items, collections or user"
      />
      <CiSearch className="absolute right-4 top-3 h-6 w-6 text-[#918b8b] dark:text-white" />
    </div>
  );
}

export default SearchBar;
