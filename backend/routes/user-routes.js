import { createCustomer } from "../controlers.js";
import UserData from "../models/user-data.model.js";

import express from "express"
const router = express.Router()

router.get('/:id', (req, res) => {
    UserData.findById(req.params.id).then((user) => {
        res.json(user)
    }).catch((err) => {
        res.status(400).json('Error: ' + err)
    })
})

router.post('/signup', (req, res) => {
    createCustomer(req.body.user);
})

export default router;