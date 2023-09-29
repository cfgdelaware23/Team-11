const mongoose = require('mongoose');

const incomeCategorySchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    publicHousing: {
        type: Boolean,
        required: true
    },
    EBT: {
        type: Boolean,
        required: true
    },
    monthlyIncome: {
        type: Number,
        required: true
    }
});

const IncomeCategory = mongoose.model("IncomeCategory", incomeCategorySchema);

module.exports = IncomeCategory;