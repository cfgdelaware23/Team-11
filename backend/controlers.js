import UserData from "../models/user-data.model.js";

import express from "express"

export const createCustomer = (req) => {
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
}