import Transaction from "../infastructure/schemas/transaction.js";

export const createTransaction = async (req, res) => {
    const transaction = req.body;

   

    // Validate the request data
    if(
        !transaction.type ||
        !transaction.amount ||
        !transaction.category ||  
        !transaction.note ||
        !transaction.date 
    ) {
        res.status(400).send();
        return;
    }

    //add a transaction
    try{
        await Transaction.create({
            type: transaction.type,
            amount: transaction.amount,
            category: transaction.category,
            note: transaction.note,
            date: transaction.date,
            reminder: transaction.reminder || false,
        });
        res.status(201).send("Transaction created successfully!");
    }
    catch (error){
        res.status(500).send("Error creating transaction: " + error.message);
    }
    
};

export const getAllTransactions = async (req, res) => {
    const transactions = await Transaction.find();
    res.status(200).json(transactions);
    return;
};

export const getTransationById = async (req, res) => {
    const transactionId = req.parms.id;
    const transaction = await Transaction.findById(transactionId);
    if (!transaction) {
        res.status(404).send();
        return;
    }
    res.status(200).json(transaction);
    return;
};

