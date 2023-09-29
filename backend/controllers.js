import UserData from "./models/user-data.model.js";

export const createCustomer = (user, res) => {
    const name = user.name;
    const discount = user.discount;
    const username = user.username;
    const lastUpdate = user.lastUpdate;
    const lastUpdatedByUser = user.lastUpdatedByUser;

    const newUser = new UserData({name, discount, username, lastUpdate, lastUpdatedByUser});
    newUser.save().then(() => {
        res.json('User added!')
    }).catch((err) => {
        res.status(400).json('Error: ' + err)
    })
}

export const getCustomer = (username, res) => {
    return UserData.find({username: username}).then((user) => {
        res.json(user);
    }).catch((err) => {
        res.status(400).json('Error: ' + err)
    })
} 