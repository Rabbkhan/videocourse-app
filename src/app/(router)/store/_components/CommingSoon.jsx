import React from 'react';

const ComingSoon = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Coming Soon</h2>
        <p className="text-gray-700 mb-6">Our Store is under construction. We&apos;ll be back soon with something amazing!</p>
        <div className="flex items-center justify-center">
          <div className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full cursor-pointer transition duration-300">
            Notify Me
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
