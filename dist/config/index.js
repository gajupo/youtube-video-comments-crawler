"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/config/index.ts
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // Load environment variables from .env file
const config = {
    jwtSecret: process.env.JWT_SECRET || 'your_default_secret',
    youtubeApiKey: process.env.YOUTUBE_API_KEY || '',
    port: process.env.PORT || 3000,
    userPassword: process.env.USER_PASSWORD || '',
};
exports.default = config;
