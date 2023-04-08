// import Home from "../pages/Home";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-around">
      <NavLink to="/">
        <div>
          <img
            src="https://cdn.thecodehelp.in/uc8hpsvdxzfcnuzbyy1n_da6b17cf16.svg"
            className="w-[150px]"
            alt="logo"
          />
        </div>
      </NavLink>

      <div className="flex justify-center items-center gap-x-2">
        <NavLink to="/">
          <div>
            <p>Home</p>
          </div>
        </NavLink>
        <NavLink to="/cart">
          <div>
            <FaShoppingCart />
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
