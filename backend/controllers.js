import UserData from "./models/user-data.model.js";
import PurchaseHistory from "./models/purchase-history.model.js";
import IncomeCategory from "./models/income-category.model.js";
import FeedbackCategory from "./models/feedback.model.js";

export const createCustomer = async (user, res) => {
    if (!user || !user.name || !user.discount || !user.username || !user.publicHousing) {
        return res.status(400).json('request body should contain a user object with name, discount, username, and publicHousing')
    }
    const name = user.name;
    //const discount = user.discount;
    const username = user.username;
    const housing = user.publicHousing;
    const currentStars = 0;
    const lastUpdate = new Date();
    const lastUpdatedByUser = false;

    const discount = calculateDiscount(user.qualifiers);

    // commit the income category data for the new user to the database
    const publicHousing = user.qualifiers.publicHousing;
    const EBT = user.qualifiers.EBT;
    const SNAP = user.qualifiers.SNAP;
    const newUserCategory = new IncomeCategory({username, publicHousing, EBT, SNAP})
    await newUserCategory.save();

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
    await PurchaseHistory.deleteOne({username: username}).then(() => {
        res.json('User deleted.')
    }).catch((err) => {
        res.status(400).json('Error: ' + err)
    })
    return userData;
} 

export const updateCustomer = async (newUserData, res) => {
    const username = newUserData.username;
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

    user.name = name;
    user.discount = discount;
    user.currentStars = currentStars;
    user.lastUpdate = lastUpdate;
    user.lastUpdatedByUser = lastUpdatedByUser;

    let resp = await user.save().then(() => res.json("User updated")).catch((err) => res.status(400).json("Error: " + err))
    return resp
}

//Can change this function depending on how the discount will be calculated given the qualifiers of the customer
export const calculateDiscount = async (qualifiers) => {
    if(qualifiers.publicHousing || qualifiers.ebt || qualifiers.snap) {
        return 0.5;
    }
    return 0;
}

export const updateFeedback = async (username, feedback) => {
    if(!username || !feedback.nutrition || !feedback.affordability || !feedback.satisfaction || feedback.ease) {
        res.status(400).json(console.log("Missing information"));
        return;
    }

    const user = await UserData.findOne({username: username});

    if(!user) {
        res.status(400).json(console.log("User not found"));
        return;
    }

    const newFeedback = new FeedbackCategory({username, nutrition, affordability, satisfaction, ease});
    newFeedback.save();
}