import React from 'react';

export function Sponsors() {
  return (
    <div className="bg-gray-900 py-16 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Thanks to our generous sponsors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center transform transition-all duration-300 hover:scale-105 group">
            <div className="mb-6 p-8 rounded-2xl bg-white group-hover:bg-gray-50 transition-colors">
              <img 
                src="https://tauc.org/wp-content/uploads/2022/02/us-chamber-logo-blue.25627bc-300x300.png"
                alt="Chamber of Commerce"
                className="w-32 h-32 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-center">Chamber of Commerce</h3>
          </div>
          
          <div className="flex flex-col items-center transform transition-all duration-300 hover:scale-105 group">
            <div className="mb-6 p-8 rounded-2xl bg-white group-hover:bg-gray-50 transition-colors">
              <img 
                src="https://img.masstransitmag.com/files/base/cygnus/mass/image/2024/05/663e293e305086aaebb82bd7-newyorkstatecomptrollerlogo.png?auto=format%2Ccompress&w=640&width=640"
                alt="New York State Department"
                className="w-32 h-32 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-center max-w-[200px]">New York State Department</h3>
          </div>
          
          <div className="flex flex-col items-center transform transition-all duration-300 hover:scale-105 group">
            <div className="mb-6 p-8 rounded-2xl bg-white group-hover:bg-gray-50 transition-colors">
              <img 
                src="https://logotyp.us/file/mit.svg"
                alt="MIT"
                className="w-32 h-32 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-center">MIT</h3>
          </div>
        </div>
      </div>
    </div>
  );
}