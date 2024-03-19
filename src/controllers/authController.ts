// src/controllers/authController.ts
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config'; // Assuming you have a centralized config file

export const loginUser = (req: Request, res: Response) => {
    const { password } = req.body;
    
    // Compare the provided password with the one from the environment variable
    if (password === config.userPassword) {
        // Generate a JWT token as the password is correct
        const token = jwt.sign({ user: 'defaultuser' }, config.jwtSecret, { expiresIn: '1h' });
        res.json({ token });
    } else {
        // Respond with an error if the password is incorrect
        res.status(401).send("Invalid password");
    }
};