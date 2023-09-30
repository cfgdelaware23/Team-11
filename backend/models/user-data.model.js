import mongoose from 'mongoose';

const userDataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: 1
    },
    discount: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    currentStars: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: false
    },
    lastUpdate: {
        type: Date,
        required: true
    },
    lastUpdatedByUser: {
        type: Boolean,
        required: true
    }
});

const UserData = mongoose.model('UserData', userDataSchema);

export default UserData;

