import express from "express";

import {
    createTransaction
} from "../application/transaction.js";

const transactionRoute = express.Router();

transactionRoute.route("/").post(createTransaction);

export default transactionRoute;    