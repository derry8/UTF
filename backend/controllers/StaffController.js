const Staff = require('../models/StaffModel')
const sanitize = require('mongo-sanitize')

const getAllStaff = async (req, res) => {
  try {
    const staff = await Staff.find()
    res.status(200).json(staff)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch staff' })
  }
}

const addStaff = async (req, res) => {
  const { name, role, work, socialLinks } = sanitize(req.body)
  if (!name || !role || !work) return res.status(400).json({ error: 'Missing required fields' })
  try {
    const newStaff = await Staff.create({ name, role, work, socialLinks })
    res.status(201).json(newStaff)
  } catch (error) {
    res.status(400).json({ error: error.message || 'Failed to add staff' })
  }
}

const updateStaff = async (req, res) => {
  const { id } = req.params
  const { name, role, work, socialLinks } = sanitize(req.body)
  try {
    const updated = await Staff.findByIdAndUpdate(
      sanitize(id),
      { name, role, work, socialLinks },
      { new: true, runValidators: true }
    )
    if (!updated) return res.status(404).json({ error: 'Staff not found' })
    res.status(200).json(updated)
  } catch (error) {
    res.status(400).json({ error: error.message || 'Failed to update staff' })
  }
}

const deleteStaff = async (req, res) => {
  const { id } = req.params
  try {
    const deleted = await Staff.findByIdAndDelete(sanitize(id))
    if (!deleted) return res.status(404).json({ error: 'Staff not found' })
    res.status(200).json({ message: 'Staff deleted successfully' })
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete staff' })
  }
}

module.exports = {
  getAllStaff,
  addStaff,
  updateStaff,
  deleteStaff,
}