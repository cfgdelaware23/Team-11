import mongoose from 'mongoose';

const feedbackSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    nutrition: {
        type: Number,
        required: true,
        unique: true
    },
    affordability: {
        type: Number,
        required: true,
        unique: true
    },
    satisfaction: {
        type: Number,
        required: true,
        unique: true
    },
    ease : {
        type: Number,
        required: true,
        unique: true
    }
})

const FeedbackCategory = mongoose.model("FeedbackCategory", feedbackSchema);

export default FeedbackCategory;