import { Spinner } from "@material-tailwind/react";

const AppSpinner = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-50 opacity-50">
        <Spinner className="md:h-20 h-16 md:w-20 w-16" color="cyan" />
        <p className="text-cyan-500 mt-4">Loading content...</p>
    </div>
  );
};

export default AppSpinner;
