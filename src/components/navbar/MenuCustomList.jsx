import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { solutionDetails } from "../../pages/solutions/data";

export default function MenuCustomList() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Detect if the device is mobile
  const isMobile = window.innerWidth <= 768;

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsOpen(false);
    }
  };

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
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={toggleDropdown}
        className="flex items-center m-1 text-gray-900 hover:cursor-pointer hover:text-cyan-600"
      >
        Services
        {isOpen ? <IoChevronUp className="ml-1" /> : <IoChevronDown className="ml-1" />}
      </button>
      {isOpen && (
        <ul className="absolute md:py-2 md:px-3 md:shadow menu dropdown-content z-[1] sm:bg-base-100 bg-cyan-400 rounded-lg w-72">
          <div>
            {solutionDetails.map((item) => (
              <Link to={`/solutions/${item.slug}`} key={item.id} onClick={() => {toggleDropdown(); closeDropdown();}}>
                <li className="text-gray-900 lg:py-1">
                  <a className="md:text-cyan-900 no-underline hover:md:text-cyan-600 text-white">{item.title}</a>
                </li>
              </Link>
            ))}
          </div>
        </ul>
      )}
    </div>
  );
}
