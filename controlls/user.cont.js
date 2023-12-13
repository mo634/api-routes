import User from "../models/user.model.js";

// create user

export const createUser = async (req, res) => {
    try {
        console.log(req.body);
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

// Get a user by ID
export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({message: "User not found"});
        res.json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

// Update a user by ID

export const updateUserById = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!user) return res.status(404).json({message: "User not found"});
        res.json(user);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};
//get all users 
export const createAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
};
