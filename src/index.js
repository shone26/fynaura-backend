import express from "express";
import transactionRoute from "./api/transaction.js";  // Add .js extension
import { connect } from "mongoose";
import connectDB from "./infastructure/db.js";



// Create an Express instance
const app = express();
// Middleware to parse JSON data in the request body
app.use(express.json());

connectDB();

app.use("/api/transaction", transactionRoute);








// Define the port to run the server
const PORT = 8000;
app.listen(PORT, console.log(`Server is running on port ${PORT}...`));