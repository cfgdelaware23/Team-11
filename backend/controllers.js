import UserData from "./models/user-data.model.js";

export const createCustomer = (user, res) => {
    const name = user.name;
    const discount = user.discount;
    const username = user.username;
    const currentStars = 0;
    const lastUpdate = new Date();
    const lastUpdatedByUser = user.lastUpdatedByUser;

    if (!name || !discount || !username || !lastUpdatedByUser) {
        return res.status(400).json('User creation request lacks field')
    }

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