const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../model/userModel"); 
const asyncHandler = require("express-async-handler");

// user register
const register = async (req, res) => {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ error: "Please add all fields" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
        return res.status(400).json({ error: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
            role,
        
        });

        res.status(201).json({
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            role: newUser.role,
        });
    } catch (error) {
        res.status(400).json({ error: "User not registered" });
    }
};

// user login
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });

        if (user && (await bcrypt.compare(password, user.password))) {

            return res.json({
                _id: user.id,
                name: user.name,
                email: user.email,
                token:generateToken(user._id) 
            });
        } else {
            return res.status(400).json({ error: "Invalid credentials" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// profile
const getProfile = async (req, res) => {
    try {
        const Id = req.user.id; 
        const user = await User.findById(Id);

        if (user) {
            res.json({
                id: user._id,
                name: user.name,
                email: user.email,
            });
        } else {
            res.status(404).json({ error: "User not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
const generateToken = (id)=> {
    return jwt.sign({id}, process.env.JWT_SECRET , {expiresIn: "10d"})
}
module.exports = { register, login, getProfile }; 