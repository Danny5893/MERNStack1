
//1. Create a setup for Express Web Server
const express = require('express');
const app = express();
const port = 3000;


//3. Create a express app and configure in server.js to delegate routes with - "Student"
const studentRoute = require('./router/student');
app.use('/student', studentRoute);


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});