"use client"
import React, { useState } from 'react'

const FixturesPage = () => {
  const [gameweek, setGameweek] = useState('')
  const [fixtures, setFixtures] = useState([])
  const [isPosted, setIsPosted] = useState(false)

  const handleGenerate = () => {
    // Dummy fixture generation logic
    const generatedFixtures = [
      { id: 1, home: 'Team A', away: 'Team B' },
      { id: 2, home: 'Team C', away: 'Team D' },
    ]
    setFixtures(generatedFixtures)
    setIsPosted(false)
  }

  const handlePost = () => {
    // Later, send data to your Node.js backend
    console.log('Posting fixtures:', fixtures)
    setIsPosted(true)
  }

  const handleEdit = (id, field, value) => {
    const updatedFixtures = fixtures.map(match =>
      match.id === id ? { ...match, [field]: value } : match
    )
    setFixtures(updatedFixtures)
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Fixtures Generator</h1>

      <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
        <select
          className="border p-2 rounded w-full sm:w-auto"
          value={gameweek}
          onChange={(e) => setGameweek(e.target.value)}
        >
          <option value="">Select Gameweek</option>
          {Array.from({ length: 38 }, (_, i) => (
            <option key={i + 1} value={`Gameweek ${i + 1}`}>
              Gameweek {i + 1}
            </option>
          ))}
        </select>

        <button
          onClick={handleGenerate}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          disabled={!gameweek}
        >
          Generate Fixtures
        </button>

        <button
          onClick={handlePost}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          disabled={fixtures.length === 0 || isPosted}
        >
          Post Fixtures
        </button>
      </div>

      {fixtures.length > 0 && (
        <div className="space-y-4">
          {fixtures.map(match => (
            <div
              key={match.id}
              className="flex flex-col sm:flex-row gap-2 items-center border p-3 rounded bg-gray-50"
            >
              <input
                type="text"
                value={match.home}
                onChange={(e) => handleEdit(match.id, 'home', e.target.value)}
                className="border p-2 rounded w-full sm:w-1/3"
              />
              <span className="font-semibold">vs</span>
              <input
                type="text"
                value={match.away}
                onChange={(e) => handleEdit(match.id, 'away', e.target.value)}
                className="border p-2 rounded w-full sm:w-1/3"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default FixturesPage
