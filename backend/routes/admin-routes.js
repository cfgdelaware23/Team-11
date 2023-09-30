import ProductData from "../models/product-data.model.js";
import express from "express";
import UserData from "../models/user-data.model.js";
const router = express.Router();

router.post("/addProduct", async (req, res) => {
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

router.get("/allCustomers", async (req, res) => {
    const users = await UserData.find();
    res.status(200).json(users);
    return;
})

export default router;