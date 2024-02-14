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
        <HiOutlineSun className="h-[1.8rem] w-[1.8rem] text-white" />
      ) : (
        <HiOutlineMoon className="h-[1.8rem] w-[1.8rem] text-white" />
      )}
    </button>
  );
}

export default DarkModeToggle;
