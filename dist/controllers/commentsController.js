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
exports.getComments = void 0;
const youtubeService_1 = require("../services/youtubeService");
const config_1 = __importDefault(require("../config"));
const youtubeService = new youtubeService_1.YouTubeService(config_1.default.youtubeApiKey);
const getComments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const videoId = req.params.videoId;
    try {
        const comments = yield youtubeService.getComments(videoId);
        res.json(comments);
    }
    catch (error) {
        res.status(500).send("Failed to fetch comments");
    }
});
exports.getComments = getComments;
