"use client"
import React, { useState } from 'react'

const Page = () => {
  const [requests, setRequests] = useState([
    { id: 1, name: 'John Doe', team: 'FC Thunder' },
    { id: 2, name: 'Jane Smith', team: 'Red Warriors' },
    { id: 3, name: 'Mike Johnson', team: 'Blue Hawks' },
  ])

  const handleAccept = (id) => {
    // Accept logic (send to backend later)
    const manager = requests.find((m) => m.id === id)
    alert(`${manager.name} has been accepted`)
    setRequests(requests.filter((m) => m.id !== id))
  }

  const handleDeny = (id) => {
    const manager = requests.find((m) => m.id === id)
    alert(`${manager.name} has been denied`)
    setRequests(requests.filter((m) => m.id !== id))
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Manager Requests</h1>

      {requests.length === 0 ? (
        <p className="text-gray-600">No manager requests at the moment.</p>
      ) : (
        <div className="space-y-4">
          {requests.map((manager) => (
            <div
              key={manager.id}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white p-4 rounded shadow"
            >
              <div className="mb-2 sm:mb-0">
                <p className="text-lg font-semibold">{manager.name}</p>
                <p className="text-gray-600">Team: {manager.team}</p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => handleAccept(manager.id)}
                  className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleDeny(manager.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Deny
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Page
