import { createCustomer } from "../controlers.js";
import UserData from "../models/user-data.model.js";

import express from "express";
const router = express.Router();

router.post("/create", async (req, res) => {
    createCustomer(req.body.user);
})


export const readCustomer = async () => {

}

export const updateCustomer = async () => {

}

export const deleteCustomer = async () => {

}

router.route()

export default router;