import React from 'react';

const Button = () => {
  return (
    <div className="flex items-center justify-center">
      <button
        className="px-6 py-3 text-white font-semibold bg-blue-600 rounded-lg shadow-lg 
                   hover:bg-blue-700 hover:shadow-blue-400/50 hover:shadow-xl 
                   transition duration-300 ease-in-out 
                   animate-fadeIn"
      >
        Click Me
      </button>
    </div>
  );
};

export default Button;
