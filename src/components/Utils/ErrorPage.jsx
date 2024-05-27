import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import { FaFlag } from "react-icons/fa6";

export function ErrorPage() {
  return (
      <div className="h-screen mx-auto grid place-items-center text-center px-8">
        <div>
            <FaFlag className="w-20 h-20 mx-auto text-cyan-500" />
            <Typography
                variant="h1"
                color="blue-gray"
                className="mt-10 !text-3xl !leading-snug md:!text-4xl"
            >
                Error 404 <br /> It looks like something went wrong.
            </Typography>
            <Typography className="mt-8 mb-14 text-[18px] font-normal text-gray-500 mx-auto md:max-w-sm">
                Don&apos;t worry, our team is already on it.Please try refreshing
                the page or come back later.
            </Typography>
            {/* <a href="https://vabrisetech.com" className="btns text-white py-3">
                back home
            </a> */}
            <Link to='/' className="btns text-white py-3">
                back home
            </Link>
        </div>
      </div>
  );
}

export default ErrorPage;