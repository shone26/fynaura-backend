import express from "express";

import {
    createTransaction,
    getAllTransactions,
    getTransationById
} from "../application/transaction.js";

const transactionRoute = express.Router();

transactionRoute.route("/")
    .post(createTransaction)
    .get(getAllTransactions);

transactionRoute.route("/:id")
    .get(getTransationById);

export default transactionRoute;    