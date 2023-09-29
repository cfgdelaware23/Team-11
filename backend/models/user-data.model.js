const mongoose = require('mongoose');

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
    id: {
        type: Number,
        required: true
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

const UserData = mongoose.model('UserData', userDaataSchema);

module.exports = UserData;

