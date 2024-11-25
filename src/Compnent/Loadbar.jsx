import React from 'react';

const LoadingBars = () => {
  return (
    <div className="flex flex-col gap-2 items-start justify-center  w-full h-40 bg-gray-100">
      <style>
        {`
          @keyframes growFull {
            from { width: 0%; }
            to { width: 100%; }
          }
          @keyframes grow75 {
            from { width: 0%; }
            to { width: 75%; }
          }
          @keyframes grow50 {
            from { width: 0%; }
            to { width: 50%; }
          }
        `}
      </style>

      <div className="w-3/4 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-orange-700 rounded-full"
          style={{
            animation: 'growFull 2s ease-in-out ',
          }}
        />
      </div>

      <div className="w-3/4 h-2  bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-orange-700 rounded-full"
          style={{
            animation: 'grow75 2s ease-in-out 0.3s infinite',
          }}
        />
      </div>

      <div className="w-3/4 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-orange-700 rounded-full"
          style={{
            animation: 'grow50 2s ease-in-out 0.6s infinite',
          }}
        />
      </div>
    </div>
  );
};

export default LoadingBars;