'use client';
import React, { useState } from 'react';

export default function TeamStatsPage() {
  const [formData, setFormData] = useState({
    yourTeam: '',
    opponentTeam: '',
    matchTime: '',
    image: null,
    message: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Result:', formData);
    alert('Match result submitted!');
    setFormData({
      yourTeam: '',
      opponentTeam: '',
      matchTime: '',
      image: null,
      message: '',
    });
  };

  return (
    <section className="min-h-screen py-12 px-4 flex flex-col justify-center items-center">
      {/* Submission Form */}
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
        <h3 className="text-2xl font-semibold mb-4 text-cyan-700">📝 Submit Match Result</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="yourTeam"
              value={formData.yourTeam}
              onChange={handleChange}
              placeholder="Your Team Name"
              required
              className="border border-gray-300 rounded px-4 py-2 w-full"
            />
            <input
              type="text"
              name="opponentTeam"
              value={formData.opponentTeam}
              onChange={handleChange}
              placeholder="Opponent Team Name"
              required
              className="border border-gray-300 rounded px-4 py-2 w-full"
            />
          </div>
          <input
            type="datetime-local"
            name="matchTime"
            value={formData.matchTime}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            required
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Optional message"
            rows="3"
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
          <button
            type="submit"
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded font-semibold"
          >
            Submit Result
          </button>
        </form>
      </div>
    </section>
  );
}
