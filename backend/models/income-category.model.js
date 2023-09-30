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
    SNAP: {
        type: Boolean,
        required: true
    }
});

const IncomeCategory = mongoose.model("IncomeCategory", incomeCategorySchema);

export default IncomeCategory;