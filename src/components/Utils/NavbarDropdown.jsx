import React from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
const menuItems = [
  {
    title: "Software Sales",
    link:
      "solutions/software-sales",
  },
  {
    title: "Web & Email Solutions",
    link:
      "solutions/web-and-email-solutions",
  },
  {
    title: "Cyber Security",
    link:
      "solutions/cyber-security",
  },
  {
    title: "IT Support & Maintainance",
    link:
      "solutions/it-support-and-maintainance",
  },
  {
    title: "Training & Consultancy Services",
    link:
      "solutions/training-and-consultancy",
  },
];
 
export function MenuCustomList() {
    
    return (
        <Menu
      animate={{
        mount: { y: 0 },
        unmount: { y: 25 },
      }}
    >
      <MenuHandler>
        <p>Solutions</p>
      </MenuHandler>
      <MenuList>
        {menuItems.map(({title, link}) => (
                <MenuItem>
                    <Link to={link}>{title}</Link>
                </MenuItem>
        ))}
      </MenuList>
    </Menu>
    );
}