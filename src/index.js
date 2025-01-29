import express from "express";


// Create an Express instance
const app = express();
// Middleware to parse JSON data in the request body
app.use(express.json());











// Define the port to run the server
const PORT = 8000;
app.listen(PORT, console.log(`Server is running on port ${PORT}...`));