import { useDarkMode } from "../context/DarkModeContext";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <button
      className="rounded-sm border-none bg-none p-1 transition-all duration-200 hover:bg-[#FF4B8B]"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? (
        <HiOutlineSun className="lg:h-[24px] h-4 w-4 lg:w-[24px] text-white" />
      ) : (
        <HiOutlineMoon className="lg:h-[24px] h-4 w-4 lg:w-[24px] text-white" />
      )}
    </button>
  );
}

export default DarkModeToggle;
