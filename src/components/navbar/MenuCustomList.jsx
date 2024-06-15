import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { solutionDetails } from "../../pages/solutions/data";

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

  const firstRowItems = solutionDetails.slice(0, 4);
  const secondRowItems = solutionDetails.slice(4, 8);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center m-1 text-gray-900 hover:cursor-pointer hover:text-cyan-600"
      >
        Services
        {isOpen ? <IoChevronUp className="ml-1" /> : <IoChevronDown className="ml-1" />}
      </button>
      {isOpen && (
        <ul
          className="absolute py-2 px-3 shadow menu dropdown-content z-[1] md:right-0 sm:bg-base-100 bg-cyan-400 rounded-lg xl:w-[40rem] lg:w-[32rem] md:w-[30rem] w-72"
        >
          <div className="grid grid-cols-2 lg:gap-4">
            <div>
              {firstRowItems.map((item) => (
                <Link to={`/solutions/${item.slug}`} key={item.id} onClick={closeDropdown}>
                  <li className="text-gray-900 lg:py-1">
                    <a className="text-cyan-900 no-underline hover:text-cyan-600">{item.title}</a>
                  </li>
                </Link>
              ))}
            </div>
            <div>
              {secondRowItems.map((item) => (
                <Link to={`/solutions/${item.slug}`} key={item.id} onClick={closeDropdown}>
                  <li className="text-gray-900 lg:py-1">
                    <a className="text-cyan-900 no-underline hover:text-cyan-600">{item.title}</a>
                  </li>
                </Link>
              ))}
            </div>
          </div>
        </ul>
      )}
    </div>
  );
}
