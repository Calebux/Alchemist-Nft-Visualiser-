import Connector from "./Connector";
import DarkModeToggle from "./DarkModeToggle";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <div className="flex items-center justify-between bg-[#0A0A23] px-[70px] py-7 dark:bg-[#000426]">
      <div className="flex items-center gap-x-[61px]">
        <Logo />
        <SearchBar />
      </div>
      <div className="flex items-center gap-x-3">
        <DarkModeToggle />
        <Connector />
      </div>
    </div>
  );
}

export default Navbar;
