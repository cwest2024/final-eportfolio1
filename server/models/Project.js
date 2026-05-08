// Import Mongoose to create a schema and model.
const mongoose = require('mongoose')

// This schema defines one portfolio project document in MongoDB.
const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Project title is required.'],
      trim: true,
      maxlength: [100, 'Project title cannot be more than 100 characters.']
    },

    category: {
      type: String,
      required: [true, 'Project category is required.'],
      trim: true,
      maxlength: [80, 'Category cannot be more than 80 characters.']
    },

    tools: {
      type: [String],
      required: [true, 'At least one tool is required.'],
      validate: {
        validator: function (value) {
          return Array.isArray(value) && value.length > 0
        },
        message: 'At least one tool is required.'
      }
    },

    description: {
      type: String,
      required: [true, 'Project description is required.'],
      trim: true,
      minlength: [20, 'Description must be at least 20 characters.'],
      maxlength: [1200, 'Description cannot be more than 1200 characters.']
    },

    image: {
      type: String,
      required: [true, 'Project image is required.'],
      trim: true
    },

    alt: {
      type: String,
      required: [true, 'Image alt text is required.'],
      trim: true,
      maxlength: [150, 'Alt text cannot be more than 150 characters.']
    },

    caption: {
      type: String,
      trim: true,
      maxlength: [200, 'Caption cannot be more than 200 characters.']
    },

    featured: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Project', projectSchema)