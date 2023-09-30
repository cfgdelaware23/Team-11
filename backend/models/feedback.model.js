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
    },
    affordability: {
        type: Number,
        required: true,
    },
    satisfaction: {
        type: Number,
        required: true,
    },
    ease : {
        type: Number,
        required: true,
    }
})

const FeedbackCategory = mongoose.model("FeedbackCategory", feedbackSchema);

export default FeedbackCategory;