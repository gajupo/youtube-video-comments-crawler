import axios from 'axios';

export class YouTubeService {
    private apiKey: string;
    private baseUrl: string = 'https://www.googleapis.com/youtube/v3';

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    async getComments(videoId: string) {
        try {
            const response = await axios.get(`${this.baseUrl}/commentThreads`, {
                params: {
                    part: 'snippet',
                    videoId: videoId,
                    key: this.apiKey,
                    textFormat: 'plainText',
                },
            });
            return response.data.items.map((item: any) => ({
                author: item.snippet.topLevelComment.snippet.authorDisplayName,
                comment: item.snippet.topLevelComment.snippet.textDisplay,
                publishedAt: item.snippet.topLevelComment.snippet.publishedAt,
            }));
        } catch (error) {
            console.error('Error fetching YouTube comments:', error);
            throw new Error('Failed to fetch comments from YouTube');
        }
    }
}
