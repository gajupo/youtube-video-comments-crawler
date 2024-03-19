"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YouTubeService = void 0;
const axios_1 = __importDefault(require("axios"));
class YouTubeService {
    constructor(apiKey) {
        this.baseUrl = 'https://www.googleapis.com/youtube/v3';
        this.apiKey = apiKey;
    }
    getComments(videoId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.get(`${this.baseUrl}/commentThreads`, {
                    params: {
                        part: 'snippet',
                        videoId: videoId,
                        key: this.apiKey,
                        textFormat: 'plainText',
                    },
                });
                return response.data.items.map((item) => ({
                    author: item.snippet.topLevelComment.snippet.authorDisplayName,
                    comment: item.snippet.topLevelComment.snippet.textDisplay,
                    publishedAt: item.snippet.topLevelComment.snippet.publishedAt,
                }));
            }
            catch (error) {
                console.error('Error fetching YouTube comments:', error);
                throw new Error('Failed to fetch comments from YouTube');
            }
        });
    }
}
exports.YouTubeService = YouTubeService;
