// Import Project model so this file can interact with MongoDB.
const Project = require('../models/Project')

// GET /api/projects
async function getProjects(req, res, next) {
  try {
    const projects = await Project.find().sort({ createdAt: -1 })

    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects
    })
  } catch (error) {
    next(error)
  }
}

// GET /api/projects/:id
async function getProjectById(req, res, next) {
  try {
    const project = await Project.findById(req.params.id)

    if (!project) {
      return res.status(404).json({
        success: false,
        error: 'Project not found.'
      })
    }

    res.status(200).json({
      success: true,
      data: project
    })
  } catch (error) {
    next(error)
  }
}

// POST /api/projects
async function createProject(req, res, next) {
  try {
    const project = await Project.create(req.body)

    res.status(201).json({
      success: true,
      message: 'Project created successfully.',
      data: project
    })
  } catch (error) {
    next(error)
  }
}

// PUT /api/projects/:id
async function updateProject(req, res, next) {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })

    if (!project) {
      return res.status(404).json({
        success: false,
        error: 'Project not found.'
      })
    }

    res.status(200).json({
      success: true,
      message: 'Project updated successfully.',
      data: project
    })
  } catch (error) {
    next(error)
  }
}

// DELETE /api/projects/:id
async function deleteProject(req, res, next) {
  try {
    const project = await Project.findByIdAndDelete(req.params.id)

    if (!project) {
      return res.status(404).json({
        success: false,
        error: 'Project not found.'
      })
    }

    res.status(200).json({
      success: true,
      message: 'Project deleted successfully.'
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject
}