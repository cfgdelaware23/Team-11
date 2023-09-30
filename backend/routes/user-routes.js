import { createCustomer, getCustomer, updateFeedback, updateIncomeCategory } from "../controllers.js";

import express from "express"
const router = express.Router()

// tested and works on both existing and non-existing
router.get('/:username', async (req, res) => {
    await getCustomer(req.params.username, res);   
    return;
})

// tested and works on both nonexisting and existing users
router.post('/signup', async (req, res) => {
    await createCustomer(req.body.user, res);
    return;
})

// tested and works on both nonexisting and existing users
router.put("/editIncomeCategory", async (req, res) => {
    await updateIncomeCategory(req, res);
    return;
})

router.post("/getdiscount", async (req, res) => {
    const username = req.body.username;
    try {
        const user = await UserData.findOne({username: username});
        
        if (!user) {
            return res.status(400).json("Cannot find user " + username);
        }
        res.status(200).json("successfully returned discount");
        return user.discount;
    } catch (err) {
        console.error("Error getting discount:", err);
        return res.status(400).json('Error getting discount');
    }
    
})

router.post("/addfeedback", async (req, res) => {
    try {
        await updateFeedback(req.body.username, req.body.feedback);
        res.status(200).json({ message: "Feedback added/updated successfully" });
    } catch (error) {
        res.status(500).json({ error: "An error occurred while updating feedback" });
    }
    return;
})

export default router;