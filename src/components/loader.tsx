import React from "react";


const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500">loading......</div>
    </div>
  );
};

// This component can be used as a fallback in React Suspense
// to show a loading spinner while the main content is being loaded.
export default Loader;