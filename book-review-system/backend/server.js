// Importing the required module
const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors())
const port = 3000;

// Basic route to test server
app.get('/', (req, res) => {
  res.send([{author:'addarsh',id:2,title:'something'}]);
});

// Starting the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});