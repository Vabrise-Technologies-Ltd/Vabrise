import { Spinner } from "@material-tailwind/react";
 
// export function DefaultSpinner() {
//   return <Spinner />;
// }

// import React from 'react';
// import { BounceLoader } from 'react-spinners';
// import { useLoading } from '../Contexts/LoadingContext';

const DefaultSpinner = () => {
//   const { loading } = useLoading(); // Get loading state from context

  return loading ? (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
      <BounceLoader color="#ffffff" size={60} />
        <Spinner />
    </div>
  ) : null;
};

export default DefaultSpinner;