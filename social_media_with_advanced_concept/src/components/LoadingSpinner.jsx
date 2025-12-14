import React from "react";

function LoadingSpinner() {
  return (
    <div className="flex justify-center mt-24">
      <div className="relative w-24 h-24">
        {/* Spinner */}
        <div className="absolute inset-0 border-4 border-gray-300 border-e-blue-600 border-s-blue-600 border-t-blue-600 rounded-full animate-spin"></div>

        {/* Center Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-md font-semibold text-gray-600">Loading</span>
        </div>
      </div>
    </div>
  );
}

export default LoadingSpinner;
