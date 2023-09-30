import { createCustomer, getCustomer, updateFeedback } from "../controllers.js";

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

router.post("/addfeedback", async (req, res) => {
    try {
        await updateFeedback(req.body.username, req.body.feedback);
        res.status(200).json({ message: "Feedback added/updated successfully" });
    } catch (error) {
        res.status(500).json({ error: "An error occurred while updating feedback" });
    }
})

export default router;