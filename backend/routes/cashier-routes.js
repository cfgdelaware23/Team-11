import { createCustomer, getCustomer } from "../controllers.js";

import express from "express";
const router = express.Router();

router.post("/create", async (req, res) => {
    return createCustomer(req.body.user, res);
})

router.get("/user/:username", async (req, res)=>{
    return getCustomer(req.params.username, res);
})

export const updateCustomer = async () => {

}

export const deleteCustomer = async () => {

}


export default router;