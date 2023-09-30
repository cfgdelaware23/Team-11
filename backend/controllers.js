import UserData from "./models/user-data.model.js";
import PurchaseHistory from "./models/purchase-history.model.js";
import IncomeCategory from "./models/income-category.model.js";
import FeedbackCategory from "./models/feedback.model.js";

// tested
export const createCustomer = async (user, res) => {
    if (!user || !user.name || !user.username 
        || user.qualifiers.publicHousing == null || user.qualifiers.EBT == null
        || user.qualifiers.SNAP == null) {
        return res.status(400).json('request body should contain a user object with name, discount, username, and publicHousing')
    }
    const name = user.name;
    //const discount = user.discount;
    const username = user.username;
    const currentStars = 0;
    const lastUpdate = new Date();
    const lastUpdatedByUser = user.lastUpdatedByUser;

    const existing = await UserData.findOne({username: username});
    if (existing) {
        return res.status(400).json('User already exists');
    }

    const discount = await calculateDiscount(user.qualifiers);

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

// tested 
export const getCustomer = async (username, res) => {
    let userData = await UserData.findOne({username: username}).then((user) => {
        if (!user){
            res.status(400).json('No such user');
            return;
        }
        res.json(user);
    }).catch((err) => {
        res.status(400).json('Error: ' + err)
    })
    return userData;
} 

// tested
export const deleteCustomer = async (username, res) => {
    let userData = await UserData.deleteOne({username: username}).then(() => {}
    ).catch((err) => {
        res.status(400).json('Error: ' + err)
    })
    
    await IncomeCategory.deleteOne({username: username}).then((_) => {})
    .catch((err) => res.status(400).json('Error: ' + err)); 

    await PurchaseHistory.deleteOne({username: username}).then(() => {})
      .catch((err) => {
        res.status(400).json('Error: ' + err)
    })
    await IncomeCategory.deleteOne({username: username}).then(() => {
    }).catch((err) => {
        res.status(400).json('Error: ' + err)
    })
    res.json("User, associated purchase history, and income category deleted")
    return userData;
} 

export const updateCustomer = async (newUserData, res) => {
    const username = newUserData.username;

    try {
        const user = await UserData.findOne({ username: username });

        if (!user) {
            return res.status(400).json("Cannot find user " + username);
        }

        user.name = newUserData.name;
        //user.discount = newUserData.discount;
        //user.currentStars = newUserData.currentStars;
        user.lastUpdate = new Date();
        user.lastUpdatedByUser = newUserData.lastUpdatedByUser;

        const discount = await calculateDiscount(newUserData.qualifiers);
        user.discount = discount;

        // commit the new income category data to the database
        const existingUserCategory = await IncomeCategory.findOne({username:username});
        if (!existingUserCategory) {
            res.status(400).json("Cannot find user category despite user existing, this should not happen");
        }
        existingUserCategory.publicHousing = newUserData.qualifiers.publicHousing;
        existingUserCategory.EBT = newUserData.qualifiers.EBT;
        existingUserCategory.SNAP = newUserData.qualifiers.SNAP;
        await existingUserCategory.save();

        await user.save();

        return res.json("User updated");
    } catch (err) {
        console.error("Error when updating customer:", err);
        return res.status(400).json('Error updating customers');
    }
}


//Can change this function depending on how the discount will be calculated given the qualifiers of the customer
export const calculateDiscount = async (qualifiers) => {
    if(qualifiers.publicHousing || qualifiers.EBT || qualifiers.SNAP) {
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

    const newFeedback = await new FeedbackCategory({username, nutrition, affordability, satisfaction, ease});
    newFeedback.save();
    res.status(200).json(console.log("successfully added feedback"));
    return;
}

export const updateIncomeCategory = async (req, res) => {
    const username = req.body.username
    const publicHousing = req.body.publicHousing
    const EBT = req.body.EBT
    const SNAP = req.body.SNAP

    const newDiscount = await calculateDiscount(req.body);

    if (username == null || publicHousing == null || EBT == null || SNAP == null) {
        res.status(400).json('Updating incomoe category requires all fields to be set');
        return;
    }

    const user = await IncomeCategory.findOne({username:username});
    
    if (!user) {
        res.status(400).json('User does not exist');
        return;
    }

    const userProfile = await UserData.findOne({username:username});
    if (!userProfile) {
        res.status(400).json('User does not exist but income category exists, should not happen');
        return;
    }
    userProfile.discount = newDiscount;
    await userProfile.save().then((_) => {}).catch((err) => res.status(400).json("Error changing profile discount rate: " + err));

    user.overwrite(req.body);
    await user.save().then((_) => {
        res.status(200).json("Successfully updated user");
    }).catch((err) => {
        res.status(400).json("Error: " + err);
    });
}