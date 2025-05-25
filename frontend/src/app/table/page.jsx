'use client';
import React from 'react';

const managers = [
  { name: 'Alpha', played: 10, won: 7, draw: 2, lost: 1, gd: 15, points: 23 },
  { name: 'Bravo', played: 10, won: 6, draw: 3, lost: 1, gd: 10, points: 21 },
  { name: 'Charlie', played: 10, won: 6, draw: 2, lost: 2, gd: 8, points: 20 },
  { name: 'Delta', played: 10, won: 5, draw: 3, lost: 2, gd: 6, points: 18 },
  { name: 'Echo', played: 10, won: 4, draw: 2, lost: 4, gd: 2, points: 14 },
  // Add more managers here
];

export default function TablePage() {
  return (
    <section className="min-h-screen flex items-center justify-center  px-4 sm:px-6">
      <div className="w-full max-w-screen-xl bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="px-6 py-4 border-b">
          <h2 className="text-3xl font-bold text-[rgb(0,191,255)]">🏆 UTF League Table</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm md:text-base text-left table-auto border-collapse">
            <thead className="bg-[rgb(0,191,255)] text-white">
              <tr>
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">Manager</th>
                <th className="px-4 py-3">P</th>
                <th className="px-4 py-3">W</th>
                <th className="px-4 py-3">D</th>
                <th className="px-4 py-3">L</th>
                <th className="px-4 py-3">GD</th>
                <th className="px-4 py-3">Pts</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              {managers
                .sort((a, b) => b.points - a.points || b.gd - a.gd)
                .map((manager, index) => (
                  <tr
                    key={manager.name}
                    className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}
                  >
                    <td className="px-4 py-3 font-bold">{index + 1}</td>
                    <td className="px-4 py-3">{manager.name}</td>
                    <td className="px-4 py-3">{manager.played}</td>
                    <td className="px-4 py-3">{manager.won}</td>
                    <td className="px-4 py-3">{manager.draw}</td>
                    <td className="px-4 py-3">{manager.lost}</td>
                    <td className="px-4 py-3">{manager.gd}</td>
                    <td className="px-4 py-3 font-semibold">{manager.points}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
