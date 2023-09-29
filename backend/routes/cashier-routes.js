import { createCustomer } from "../controlers.js";
import PurchaseHistory from "../models/purchase-history.model.js";

import express from "express";
const router = express.Router();

router.post("/create", async (req, res) => {
    createCustomer(req.body.user);
})

router.post("/addPurchase", async (req, res) => {
    const username = req.body.user;
    const purchases = req.body.purchases;

    for(const id of purchases) {
        const user = PurchaseHistory.findOne({username});
        user.history.push(id);
    }

})

router.route()

export default router;