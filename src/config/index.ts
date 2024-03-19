// src/config/index.ts
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const config = {
    jwtSecret: process.env.JWT_SECRET || 'your_default_secret',
    youtubeApiKey: process.env.YOUTUBE_API_KEY || '',
    port: process.env.PORT || 3000,
    userPassword: process.env.USER_PASSWORD || '',
};

export default config;
