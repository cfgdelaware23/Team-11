import UserData from "./models/user-data.model.js";

export const createCustomer = async (user, res) => {
    const name = user.name;
    const discount = user.discount;
    const username = user.username;
    let date = new Date();
    const newUser = new UserData({name, discount, username, date, date});
    let data = await newUser.save().then(() => {
        res.json('User added!')
    }).catch((err) => {
        res.status(400).json('Error: ' + err)
    })
    return data;
}

export const getCustomer = async (username, res) => {
    let userData = await UserData.find({username: username}).then((user) => {
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