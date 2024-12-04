import React from 'react';

export function Program() {
  const schedule = [
    { time: "09:00 - 09:30", activity: "Registration & Welcome Coffee" },
    { time: "09:30 - 10:30", activity: "Opening Keynote: The Future of Tech" },
    { time: "10:45 - 12:00", activity: "Panel Discussion: Innovation in AI" },
    { time: "12:00 - 13:00", activity: "Networking Lunch" },
    { time: "13:00 - 14:30", activity: "Workshop Sessions" },
    { time: "14:45 - 16:00", activity: "Tech Demonstrations" },
    { time: "16:00 - 16:30", activity: "Closing Remarks" },
    { time: "16:30 - 18:30", activity: "Cocktail & Networking" },
  ];

  return (
    <div className="bg-gray-900 py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Event Program</h2>
        <div className="max-w-3xl mx-auto">
          {schedule.map((item, index) => (
            <div key={index} className="flex border-b border-white/20 py-4 px-4 sm:px-0">
              <div className="w-1/3 font-semibold text-blue-400">{item.time}</div>
              <div className="w-2/3">{item.activity}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}