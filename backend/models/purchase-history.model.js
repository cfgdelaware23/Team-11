import mongoose from 'mongoose';

const purchaseHistorySchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    history: {
        type: [Number],
        required: true
    }
});

const PurchaseHistory = mongoose.model("PurchaseHistory", purchaseHistorySchema)

export default PurchaseHistory