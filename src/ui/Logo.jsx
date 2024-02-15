import { NavLink } from "react-router-dom";
import logo from "../assets/alchemist_logo.png";

function Logo() {
  return (
    <NavLink
      to={"/"}
      className="flex items-center gap-x-4 text-xs font-black leading-4 text-white sm:leading-6 lg:text-base"
    >
      <img src={logo} alt="" />
      <h3>Alchemist 4.0</h3>
    </NavLink>
  );
}

export default Logo;
