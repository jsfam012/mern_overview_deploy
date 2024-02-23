const express = require('express')
const db = require('./config/connection')

const app = express()
const PORT = process.env.PORT || 3333

// Import Routes
const api_routes = require('./routes/api_routes')

// Open Middleware
app.use(express.json())

// Load Routes
app.use('/api', api_routes)

// Confirm DB connection
db.on('open', () => {
  // Start the server
  app.listen(PORT, () => console.log('Server started on port', PORT))
})