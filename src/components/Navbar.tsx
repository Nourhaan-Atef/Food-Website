import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import user from "../assets/user.png";
import heart from "../assets/heart.png";
import shoppingBag from "../assets/shopping-bag.png";


const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center py-6 px-20 bg-darkGray">
        <section>
          <img src={logo} alt="Logo" />
        </section>
        <section className="flex gap-5 text-white font-Roboto text-lg">
          <NavLink to="Home" className="text-red-700 border-b-2 border-b-red">
            Home
          </NavLink>
          <NavLink to="aboutUs" className="text-red-700">
            About us
          </NavLink>
          <NavLink to="ContactUs" className="text-red-700">
            Contact Us
          </NavLink>
          <NavLink to="menu" className="text-red-700">
            Menu
          </NavLink>
          <NavLink to="blog" className="text-red-700">
            Blog
          </NavLink>
          <NavLink to="ContactUs" className="text-red-700">
            Contact Us
          </NavLink>
        </section>
        <section className="flex justify-between items-center gap-5">
          <div className="flex gap-2">
            <div className="rounded-full border-2 border-white p-1 hover:bg-red hover:cursor-pointer hover:border-red">
              <img
                src={user}
                alt="user Img"
                className="px-px "
              />
            </div>
            <div className="rounded-full border-2 border-white p-1 hover:bg-red hover:cursor-pointer hover:border-red">
              <img
                src={heart}
                alt="heart Img"
                className="px-px "
              />
            </div>
            <div className="rounded-full border-2 border-white p-1 hover:bg-red hover:cursor-pointer hover:border-red">
              <img
                src={shoppingBag}
                alt="shopping bag Img"
                className="px-px "
              />
            </div>
          </div>
          <button className="text-white bg-red  border border-red hover:bg-transparent hover:border-white hover:text-red rounded-xl px-10 py-2 font-Poppins text-lg">
            Login
          </button>
        </section>
      </nav>
    </>
  );
};

export default Navbar;
