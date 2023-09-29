import { createCustomer, getCustomer, deleteCustomer } from "../controllers.js";

import express from "express";
const router = express.Router();

router.post("/create", async (req, res) => {
    return createCustomer(req.body.user, res);
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