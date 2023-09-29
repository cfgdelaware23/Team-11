import ProductData from "../models/product-data.model.js";
import express from "express";
const router = express.Router();

router.post("/addproduct", async (req, res) => {
    const product = req.body.product;
    const id = product.productId;
    const stars = product.stars;
    const price = product.basePrice;

    const found = await ProductData.findOne(id);
    if(!found) {
        res.status(404).json("Product already exists");
        return;
    }
    
    const newProduct = new ProductData({id, stars, price});
    newProduct.save();
    res.status(200).json("Successfully added product!");
    return;
})

export default router;