const mongoose = require('mongoose');

const productDataSchema = mongoose.Schema({
    productID: {
        type: Number,
        required: true,
        unique: true
    },
    stars: {
        type: Number,
        required: true
    }
});

const ProductData = mongoose.model("ProductData", ProductDataSchema);

export default ProductData;