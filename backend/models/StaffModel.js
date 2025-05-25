const mongoose = require('mongoose')

const staffSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    work: {
      type: String,
      required: true,
    },
    socialLinks: [
      {
        type: String, 
      },
    ],
  },
  { timestamps: true }
)

const Staff = mongoose.model('Staff', staffSchema)
module.exports = Staff