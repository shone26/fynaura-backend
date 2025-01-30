import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    note: {
        type: String,
        required: false,
    },
    date: {
        type: String,
        required: true,
    },
    reminder: {
        type: Boolean,
        required: false,
    },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

export default Transaction;
