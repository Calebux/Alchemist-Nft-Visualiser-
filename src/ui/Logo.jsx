import { NavLink } from "react-router-dom";
import logo from "../assets/alchemist_logo.png";

function Logo() {
  return (
    <NavLink
      to={"/"}
      className="flex items-center gap-x-4 text-base font-black leading-6 text-white"
    >
      <img src={logo} alt="" />
      <h3>Alchemist 4.0</h3>
    </NavLink>
  );
}

export default Logo;
