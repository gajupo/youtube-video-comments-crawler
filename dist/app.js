"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
// Import routes
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const commentRoutes_1 = __importDefault(require("./routes/commentRoutes"));
// Load environment variables
dotenv_1.default.config();
// Initialize the Express application
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)()); // Enables CORS
app.use((0, helmet_1.default)()); // Adds security headers
app.use(express_1.default.json()); // Parses incoming requests with JSON payloads
app.use((0, morgan_1.default)('dev')); // Logging middleware
// Base route
app.get('/', (req, res) => {
    res.status(200).send('Hello, world!');
});
// Use routes
app.use('/api/auth', authRoutes_1.default);
app.use('/api/comments', commentRoutes_1.default);
// Error handling middleware
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || 'Something went wrong on the server.';
    console.error(err.stack);
    res.status(status).send(message);
});
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});
exports.default = app;
