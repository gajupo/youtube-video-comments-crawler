
// src/middleware/verifyToken.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    // Get the token from the 'Authorization' header.
    // Tokens are typically formatted as "Bearer <token>"
    const bearerHeader = req.headers['authorization'];
    
    if (bearerHeader) {
        const bearerToken = bearerHeader.split(' ')[1]; // Extract the token from the bearer
        
        jwt.verify(bearerToken, process.env.JWT_SECRET as string, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Unauthorized. Invalid or expired token.' });
            } else {
                // If the token is verified successfully, attach the decoded user to the request
                // This is useful for further user identification in the request lifecycle
                (req as any).user = decoded;
                next(); // Continue to the next middleware or request handler
            }
        });
    } else {
        // If no token is provided in the header
        return res.status(403).json({ message: 'A token is required for authentication' });
    }
};
