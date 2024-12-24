import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon as IoChevronDown, ChevronUpIcon as IoChevronUp } from 'lucide-react';
import { solutionDetails } from "../pages/solutions/data";

export default function MenuCustomList({ closeNavbar, activeDropdown, setActiveDropdown, isMobile }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const toggleDropdown = () => {
    if (isMobile) {
      setActiveDropdown(activeDropdown === "services" ? null : "services");
    } else {
      setIsOpen(!isOpen);
    }
  };

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

  const handleItemClick = () => {
    if (isMobile) {
      setActiveDropdown(null);
    }
    closeNavbar();
  };

  return (
    <div
      ref={dropdownRef}
      className={`relative ${isMobile ? 'w-full' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={toggleDropdown}
        className="flex items-center m-1 text-gray-900 hover:cursor-pointer hover:text-cyan-600 w-full justify-between"
      >
        Services
        {isMobile ? (
          activeDropdown === "services" ? <IoChevronUp className="ml-1" /> : <IoChevronDown className="ml-1" />
        ) : (
          isOpen ? <IoChevronUp className="ml-1" /> : <IoChevronDown className="ml-1" />
        )}
      </button>
      {((isMobile && activeDropdown === "services") || (!isMobile && isOpen)) && (
        <ul className={`${isMobile ? 'relative' : 'absolute'} md:py-2 md:px-3 md:shadow menu dropdown-content z-[1] sm:bg-base-100 bg-cyan-400 rounded-lg w-72`}>
          <div>
            {solutionDetails.map((item) => (
              <Link
                to={`/solutions/${item.slug}`}
                key={item.id}
                onClick={handleItemClick}
              >
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
