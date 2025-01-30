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