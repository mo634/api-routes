import {createAllUsers, createUser, getUserById, updateUserById} from '../controlls/user.cont.js';
import express from 'express';
import User from '../models/user.model.js';
// initialize router and model


const router = express.Router();






// Create a new user
router.post("/create", createUser);


// get all users
router.get("/get",createAllUsers);


// Get a user by ID
router.get("/get/:id",getUserById);

// Update a user by ID
router.put("/update/:id", updateUserById);

export default router;
