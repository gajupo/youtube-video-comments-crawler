import express, { Request, Response, NextFunction, Application } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';

// Import routes
import authRoutes from './routes/authRoutes';
import commentRoutes from './routes/commentRoutes';

// Load environment variables
dotenv.config();

// Initialize the Express application
const app: Application = express();

// Middleware
app.use(cors()); // Enables CORS
app.use(helmet()); // Adds security headers
app.use(express.json()); // Parses incoming requests with JSON payloads
app.use(morgan('dev')); // Logging middleware

// Base route
app.get('/', (req: Request, res: Response) => {
    res.status(200).send('Hello, world!');
});

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/comments', commentRoutes);

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    const status = err.status || 500;
    const message = err.message || 'Something went wrong on the server.';
    console.error(err.stack);
    res.status(status).send(message);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

export default app;
