import express from "express";
import PurchaseHistory from "../models/purchase-history.model.js";
import ProductData from "../models/product-data.model.js";
import UserData from "../models/user-data.model.js";
import IncomeCategory from "../models/income-category.model.js";
const router = express.Router();

router.post("/product/add", async (req, res) => {
    const product = req.body.product;
    const productID = product.productID;
    const stars = product.stars;
    const basePrice = product.basePrice;

    const found = await ProductData.findOne({productID});
    if(found) {
        res.status(400).json("Product already exists");
        return;
    }
    
    const newProduct = new ProductData({productID, stars, basePrice});
    newProduct.save();
    res.status(200).json("Successfully added product!");
    return;
})

router.get("/product/:productID", async (req, res) => {
    const id = req.params.productID

    const found = await ProductData.findOne({productID: id});
    if(!found) {
        res.status(400).json("Product id does not exist");
        return;
    }
    res.status(200).json(found)
    return;
})

router.post("/product/update", async (req, res) => {
    const product = req.body.product;
    const id = product.productId;
    const stars = product.stars;
    const basePrice = product.basePrice;

    if (!id || !stars || !basePrice) {
        res.status(400).json('Product update request must contain all fields');
        return
    }

    const found = await ProductData.findOne({productID: id});
    if(!found) {
        res.status(400).json('Product id does not exist');
        return;
    }

    found.stars = stars;
    found.basePrice = basePrice;

    await found.save().then((updated) => {
        res.status(200).json(updated)
    }).catch((err) => {
        res.status(400).json("Error: " + err)
    });
    return;
})

router.post("/product/delete", async (req, res) => {
    const product = req.body.product;
    const id = product.productId;

    if (!id) {
        res.status(400).json('Product delete request must have a product with productId');
        return
    }

    const deleted = await ProductData.deleteOne({productID: id});

    if (!deleted) {
        res.status(400).json('Cannot find specified product')
        return;
    }

    res.status(200).json(deleted)
    return;
})

router.get("/allPurchaseHistories", async (req, res) => {
    await PurchaseHistory.find()
    .then((histories) => res.status(200).json(histories))
    .catch((err) => res.status(400).json("Error: " + err));
    return;
})

router.get("/userPurchaseHistory/:username", async (req, res) => {
    const username = req.params.username;
    const user = await PurchaseHistory.findOne({username: username});
    if(!user) {
        res.status(400).json("User not found");
        return;
    }
    res.status(200).json(user);
    return;
})

router.get("/allCustomers", async (req, res) => {
    await UserData.find()
    .then((users) => {
        res.status(200).json(users);
    })
    .catch((err) => {
        res.status(400).json("Error: " + err);
    });
    
    return;
})

export default router;