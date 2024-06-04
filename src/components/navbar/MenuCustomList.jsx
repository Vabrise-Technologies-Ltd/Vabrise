import React from "react";
import { Link } from "react-router-dom";

const menuItems = [
  {
    title: "Software Sales",
    link: "solutions/software-sales",
  },
  {
    title: "Web & Email Solutions",
    link: "solutions/web-and-email-solutions",
  },
  {
    title: "Cyber Security",
    link: "solutions/cyber-security",
  },
  {
    title: "IT Support & Maintainance",
    link: "solutions/it-support-and-maintainance",
  },
  {
    title: "Training & Consultancy Services",
    link: "solutions/training-and-consultancy",
  },
];

export default function MenuCustomList({toggleNavbar, closeNavbar}) {
  return (
    <details className="dropdown">
      <summary tabIndex={0} className="m-1  text-gray-900">Solutions</summary>
      <ul
        tabIndex={0}
        className="py-2 px-4 shadow menu dropdown-content z-[1] sm:bg-base-100 bg-cyan-100 rounded-md md:w-72 w-64"
      >
        {menuItems.map((item, index) => (
          <Link 
            onClick={() => {toggleNavbar(); closeNavbar();}} 
            to={item.link} 
            key={index}>
            <li className="text-gray-900">
              <a className="text-gray-900 no-underline hover:text-gray-900">{item.title}</a>
            </li>
          </Link>
        ))}
      </ul>
    </details>
  );
}
