const express = require('express');
const app = express();
const port = 1800;  // Use environment port or 3000 by default

// Define a route for the GET request
app.get('/api', (req, res) => {
  res.json({ message: 'Hello, this is a GET API response!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});