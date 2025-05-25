'use client';
import React from 'react';

const fixtures = [
  {
    id: 1,
    home: 'Aston Villa',
    away: 'Tottenham',
    date: '2025-05-16',
    time: '20:30',
    played: false,
  },
  {
    id: 2,
    home: 'Man City',
    away: 'Arsenal',
    date: '2025-05-17',
    time: '21:00',
    played: false,
  },
];

function getLogo(team) {
  return `/logos/${team.toLowerCase().replace(/\s/g, '')}.png`;
}

export default function FixturesPage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-[rgb(0,191,255)]">📅 Match Fixtures</h2>
        </div>

        <div className="divide-y divide-gray-200">
          {fixtures.map((match) => (
            <div
            key={match.id}
            className="flex items-center justify-between p-4 hover:bg-gray-50 transition"
          >
            {/* Team Logos + Names */}
            <div className="flex items-center gap-3">
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-2">
                  <img
                    src={getLogo(match.home)}
                    alt={match.home}
                    className="w-5 h-5 object-contain"
                  />
                  <span className="text-sm text-gray-800">{match.home}</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <img
                    src={getLogo(match.away)}
                    alt={match.away}
                    className="w-5 h-5 object-contain"
                  />
                  <span className="text-sm text-gray-800">{match.away}</span>
                </div>
              </div>
            </div>
          
            {/* Match Time with Left Border */}
            <div className="pl-4 ml-4 border-l border-gray-300 text-right text-sm text-gray-600 whitespace-nowrap">
              <p className="font-medium">
                {new Date(match.date).toDateString() === new Date().toDateString()
                  ? 'Today'
                  : match.date}
              </p>
              <p>{match.time}</p>
            </div>
          </div>
          
          ))}
        </div>
      </div>
    </section>
  );
}
