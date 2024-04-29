// Spinner.js
import React from 'react';
import { BounceLoader } from 'react-spinners';
import { useLoading } from '../Contexts/LoadingContext';

const Spinner = () => {
  const { loading } = useLoading(); // Get loading state from context

  return loading ? (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
      <BounceLoader color="#ffffff" size={60} />
    </div>
  ) : null;
};

export default Spinner;
