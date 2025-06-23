import { Link } from "react-router-dom";
import {
  HiMiniBars3BottomLeft,
  HiOutlineHeart,
  HiOutlineUser,
} from "react-icons/hi2";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
import { assets } from "../assets/assets";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../context/authContext";

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Orders", href: "/orders" },
  { name: "Cart Page", href: "/cart" },
  { name: "Check Out", href: "/checkout" },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);

  const { currentUser, logout } = useAuth();

  const handleLogOut = () => {
    logout();
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        {/* left side */}
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/">
            <HiMiniBars3BottomLeft className="size-6" />
          </Link>

          {/* search input */}
          <div className="relative sm:w-72 w-40 space-x-2">
            <IoSearchOutline className="absolute inline-block left-4 inset-y-2" />
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full py-1 md:px-8 px-8 rounded-md focus:outline-none bg-[#EAEAEA]"
            />
          </div>
        </div>

        {/* right side */}
        <div className="relative flex items-center md:space-x-3 space-x-2">
          <div className="">
            {currentUser ? (
              <>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <img
                    src={assets.avatar}
                    alt="user Profile"
                    className={`size-7 rounded-full ${
                      currentUser ? "ring-2 ring-blue-500" : ""
                    } `}
                  />
                </button>
                {/* show dropdowns */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 p-2 w-48 bg-white shadow-lg rounded-md z-40">
                    <ul>
                      {navigation.map((item, index) => (
                        <li
                          key={index}
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                          <Link
                            to={item.href}
                            className="block px-4 py-2 rounded-sm text-sm hover:bg-gray-100"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <button
                          onClick={handleLogOut}
                          className="w-full text-start rounded-sm block px-4 py-2 text-sm hover:bg-red-500 hover:text-white hover:font-semibold"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login">
                <HiOutlineUser className="size-6" />
              </Link>
            )}
          </div>
          <button className="hidden sm:block">
            <HiOutlineHeart className="size-6" />
          </button>

          <Link
            to="/cart"
            className="bg-primary p-1 sm:px-6 py-2 flex items-center rounded-sm"
          >
            <HiOutlineShoppingCart className="size-6" />
            {cartItems.length > 0 ? (
              <span className="text-sm font-semibold sm:ml-1">
                {cartItems.length}
              </span>
            ) : (
              <span className="text-sm font-semibold sm:ml-1">0</span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
