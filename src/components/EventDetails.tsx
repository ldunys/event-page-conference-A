import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

export function EventDetails() {
  const address = "Tech Center, 123 Innovation Street, New York";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <div className="bg-white min-h-[30vh] md:h-[30vh] flex items-center py-8 md:py-0">
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-8">
            {/* Date */}
            <div className="flex flex-col items-center justify-center bg-gray-50 rounded-lg p-6 transform transition-all duration-300 hover:shadow-md">
              <Calendar className="w-8 h-8 text-blue-600 mb-3" />
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-1">Date</h3>
                <p className="text-gray-600">January 15, 2025</p>
              </div>
            </div>
            
            {/* Time */}
            <div className="flex flex-col items-center justify-center bg-gray-50 rounded-lg p-6 transform transition-all duration-300 hover:shadow-md">
              <Clock className="w-8 h-8 text-blue-600 mb-3" />
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-1">Time</h3>
                <p className="text-gray-600">9:00 AM - 6:30 PM</p>
              </div>
            </div>
            
            {/* Location */}
            <div className="flex flex-col items-center justify-center bg-gray-50 rounded-lg p-6 transform transition-all duration-300 hover:shadow-md">
              <MapPin className="w-8 h-8 text-blue-600 mb-3" />
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-1">Location</h3>
                <a 
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <p>Tech Center, New York</p>
                  <p>123 Innovation Street</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}