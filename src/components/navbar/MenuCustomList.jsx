import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoChevronDown } from "react-icons/io5";
import { IoChevronUp } from "react-icons/io5";
import menuItems from "../data";

export default function MenuCustomList() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center m-1 text-gray-900 hover:cursor-pointer hover:text-cyan-600"
      >
        Services 
        {isOpen ? <IoChevronUp className="ml-1"/> : <IoChevronDown className="ml-1"/>}
      </button>
      {isOpen && (
        <ul
          className="absolute py-2 px-3 shadow menu dropdown-content z-[1] sm:bg-base-100 bg-cyan-100 rounded-md md:w-72 w-72"
        >
          {menuItems.map((item, index) => (
            <Link to={item.link} key={index} onClick={closeDropdown}>
              <li className="text-gray-900">
                <a className="text-gray-900 no-underline hover:text-gray-900">{item.title}</a>      
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}