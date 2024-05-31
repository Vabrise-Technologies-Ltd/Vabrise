import { Spinner } from "@material-tailwind/react";

const DefaultSpinner = () => {
  return (
    // <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
        <Spinner className="md:h-20 h-16 md:w-20 w-16" color="cyan" />
    // </div>
  );
};

export default DefaultSpinner;