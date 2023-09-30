import PurchaseHistory from "../models/purchase-history.model.js";
import { createCustomer, getCustomer, deleteCustomer, updateCustomer, updateIncomeCategory } from "../controllers.js";

import express from "express";
const router = express.Router();

router.post("/create", async (req, res) => {
    req.body.user.lastUpdatedByUser = false;
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

router.get("/:username", async (req, res)=>{
    return getCustomer(req.params.username, res);
})

router.delete("/:username", async (req, res) => {
    return deleteCustomer(req.params.username, res);
})

//tested and works
router.put("/update", async (req, res) => {
    req.body.user.lastUpdatedByUser = false;
    return updateCustomer(req.body.user, res);
})

router.put("/editIncomeCategory", async (req, res) => {
    await updateIncomeCategory(req, res);
    return;
})

router.post("/addfeedback", async (req, res) => {
    try {
        await updateFeedback(req.body.username, req.body.feedback);
        res.status(200).json({ message: "Feedback added/updated successfully" });
    } catch (error) {
        res.status(500).json({ error: "An error occurred while updating feedback" });
    }
})

export default router;