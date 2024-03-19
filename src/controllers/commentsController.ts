import { Request, Response } from 'express';
import { YouTubeService } from '../services/youtubeService';
import config from '../config'

const youtubeService = new YouTubeService(config.youtubeApiKey);

export const getComments = async (req: Request, res: Response) => {
    const videoId = req.params.videoId;
    try {
        const comments = await youtubeService.getComments(videoId);
        res.json(comments);
    } catch (error) {
        res.status(500).send("Failed to fetch comments");
    }
};
