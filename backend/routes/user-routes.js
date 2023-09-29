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
    const name = req.body.name;
    const discount = req.body.discount;
    const username = req.body.username;
    const lastUpdate = req.body.lastUpdate;
    const lastUpdatedByUser = req.body.lastUpdatedByUser;

    const newUser = new UserData({name, discount, username, lastUpdate, lastUpdatedByUser});
    newUser.save().then(() => {
        res.json('User added!')
    }).catch((err) => {
        res.status(400).json('Error: ' + err)
    })
})

export default router;