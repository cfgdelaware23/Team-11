import { createCustomer, getCustomer } from "../controllers.js";

import express from "express"
const router = express.Router()

router.get('/:username', async (req, res) => {
    let data = await getCustomer(req.params.username, res);   
    return data
})

router.post('/signup', async (req, res) => {
    let data = await createCustomer(req.body.user, res);
    return data
})

export default router;