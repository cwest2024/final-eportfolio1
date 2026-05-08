// This is a simple test to confirm the project routes file loads correctly.
// It gives the final project a basic backend test.

const projectRoutes = require('../routes/projectRoutes')

test('project routes should be defined', () => {
  expect(projectRoutes).toBeDefined()
})