import { createCustomer, getCustomer, deleteCustomer } from "../controllers.js";
import PurchaseHistory from "../models/purchase-history.model.js";

import express from "express";
const router = express.Router();

router.post("/create", async (req, res) => {
    return createCustomer(req.body.user, res);
})

router.post("/addPurchase", async (req, res) => {
    const username = req.body.user;
    const purchases = req.body.purchases;

    for(const id of purchases) {
        const user = await PurchaseHistory.findOne({username: username});
        if (user) {
            user.history.push(id);
            await user.save(); // Save the changes to the database
        }
        console.log(user.history);
    }
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