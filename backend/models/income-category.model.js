import mongoose from 'mongoose';

// when adding new categories, please edit the functions in controller that update the database on this   
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