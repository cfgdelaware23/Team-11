import UserData from "./models/user-data.model.js";
import PurchaseHistory from "./models/purchase-history.model.js";

export const createCustomer = async (user, res) => {
    const name = user.name;
    const discount = user.discount;
    const username = user.username;
    const currentStars = 0;
    const lastUpdate = new Date();
    const lastUpdatedByUser = false;

    if (!name || !discount || !username) {
        return res.status(400).json('User creation request lacks field')
    }
    const newUser = new UserData({name, discount, username, currentStars, lastUpdate, lastUpdatedByUser});
    const newPurchaseHistory = new PurchaseHistory({username, history: []});
    await newPurchaseHistory.save();
    let data = await newUser.save().then(() => {
        res.json('User added: ' + username)
    }).catch((err) => {
        res.status(400).json('Error: ' + err)
    })
    
    return data;
}

export const getCustomer = async (username, res) => {
    let userData = await UserData.findOne({username: username}).then((user) => {
        res.json(user);
    }).catch((err) => {
        res.status(400).json('Error: ' + err)
    })
    return userData;
} 

export const deleteCustomer = async (username, res) => {
    let userData = await UserData.deleteOne({username: username}).then(() => {
        res.json('User deleted.')
    }
    ).catch((err) => {
        res.status(400).json('Error: ' + err)
    })
    return userData;
} 

export const updateCustomer = async (username, newUserData, res) => {
    const user = UserData.findOne({ username: username }).then((foundUsr) => {
        if (!foundUsr) {
            res.status(400).json("Cannot find user " + username)
        }
    }).catch((err) => {
        res.status(400).json('Error when searching customer: ' + err)
    })

    const name = newUserData.name
    const discount = newUserData.discount
    const currentStars = newUserData.currentStars
    const lastUpdate = new Date()
    const lastUpdatedByUser = newUserData.lastUpdatedByUser

    if (!name || !discount || currentStars || !username || !lastUpdatedByUser) {
        return res.status(400).json('User creation request lacks field')
    }
}