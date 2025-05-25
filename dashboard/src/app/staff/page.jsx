"use client"
import React, { useState } from 'react'

const Page = () => {
  const [showForm, setShowForm] = useState(false)
  const [staff, setStaff] = useState([])
  const [name, setName] = useState('')
  const [editingId, setEditingId] = useState(null)

  const handleAddOrUpdate = () => {
    if (editingId !== null) {
      // Update staff
      const updated = staff.map((member) =>
        member.id === editingId ? { ...member, name } : member
      )
      setStaff(updated)
      setEditingId(null)
    } else {
      // Add new staff
      const newMember = {
        id: Date.now(),
        name,
      }
      setStaff([...staff, newMember])
    }
    setName('')
    setShowForm(false)
  }

  const handleEdit = (id) => {
    const member = staff.find((m) => m.id === id)
    setName(member.name)
    setEditingId(id)
    setShowForm(true)
  }

  const handleDelete = (id) => {
    const filtered = staff.filter((m) => m.id !== id)
    setStaff(filtered)
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Add Staff Button */}
      <button
        onClick={() => {
          setShowForm(!showForm)
          setEditingId(null)
          setName('')
        }}
        className="w-full bg-blue-600 text-white text-lg py-3 rounded-md hover:bg-blue-700 transition mb-6"
      >
        {showForm ? 'Cancel' : 'Add a Staff Member'}
      </button>

      {/* Form */}
      {showForm && (
        <div className="mb-6 bg-white p-4 rounded shadow">
          <input
            type="text"
            placeholder="Enter staff member name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 rounded mb-4"
          />
          <button
            onClick={handleAddOrUpdate}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            {editingId !== null ? 'Update Staff Member' : 'Add Staff Member'}
          </button>
        </div>
      )}

      {/* Staff List */}
      <div className="space-y-4">
        {staff.map((member) => (
          <div
            key={member.id}
            className="flex justify-between items-center bg-white p-4 rounded shadow"
          >
            <span className="text-lg">{member.name}</span>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(member.id)}
                className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(member.id)}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page
