"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config")); // Assuming you have a centralized config file
const loginUser = (req, res) => {
    const { password } = req.body;
    // Compare the provided password with the one from the environment variable
    if (password === config_1.default.userPassword) {
        // Generate a JWT token as the password is correct
        const token = jsonwebtoken_1.default.sign({ user: 'user' }, config_1.default.jwtSecret, { expiresIn: '1h' });
        res.json({ token });
    }
    else {
        // Respond with an error if the password is incorrect
        res.status(401).send("Invalid password");
    }
};
exports.loginUser = loginUser;
