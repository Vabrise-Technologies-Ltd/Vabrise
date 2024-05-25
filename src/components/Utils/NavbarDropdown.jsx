import React from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { IoChevronUpOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import {
  Menu,
  MenuHandler,
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
    const [openMenu, setOpenMenu] = React.useState(false);
 
    return (
        <Menu open={openMenu} handler={setOpenMenu} allowHover>
        <MenuHandler>
            <p className="hover:cursor-pointer flex items-center gap-1">
                Technology 
                {openMenu ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
            </p>
        </MenuHandler>
        <MenuList className="hidden md:w-[24rem] grid-cols-7 gap-3 overflow-visible lg:grid">
            <ul className="col-span-4 flex w-full flex-col gap-1">
            {menuItems.map(({ title, link }) => (
                <Link to={link}>
                    <Typography  color="cyan" className="mb-1 font-[Lato] font-medium">
                    {title}
                    </Typography>
                </Link>
            ))}
            </ul>
        </MenuList>
        </Menu>
    );
}