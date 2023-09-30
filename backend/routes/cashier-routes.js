import PurchaseHistory from "../models/purchase-history.model.js";
import { createCustomer, getCustomer, deleteCustomer } from "../controllers.js";

import express from "express";
const router = express.Router();

router.post("/create", async (req, res) => {
    return createCustomer(req.body.user, res);
})

router.post("/addPurchase", async (req, res) => {
    const username = req.body.username;
    const purchases = req.body.purchases;
    const user = await PurchaseHistory.findOne({username: username});
    
    if(!user) {
        res.status(400).json(console.log("User not found"));
        return;
    }

    for(const id of purchases) {
        user.history.push(id);
    }
    await user.save(); // Save the changes to the database
    return res.json("Successfully added purchase(s)!: " + purchases);
})

router.get("/user/:username", async (req, res)=>{
    return getCustomer(req.params.username, res);
})

router.delete("/user/:username", async (req, res) => {
    return deleteCustomer(req.params.username, res);
})

export const updateCustomer = async () => {
}

export default router;