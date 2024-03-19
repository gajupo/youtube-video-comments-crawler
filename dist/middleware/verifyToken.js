"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyToken = (req, res, next) => {
    // Get the token from the 'Authorization' header.
    // Tokens are typically formatted as "Bearer <token>"
    const bearerHeader = req.headers['authorization'];
    if (bearerHeader) {
        const bearerToken = bearerHeader.split(' ')[1]; // Extract the token from the bearer
        jsonwebtoken_1.default.verify(bearerToken, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Unauthorized. Invalid or expired token.' });
            }
            else {
                // If the token is verified successfully, attach the decoded user to the request
                // This is useful for further user identification in the request lifecycle
                req.user = decoded;
                next(); // Continue to the next middleware or request handler
            }
        });
    }
    else {
        // If no token is provided in the header
        return res.status(403).json({ message: 'A token is required for authentication' });
    }
};
exports.verifyToken = verifyToken;
