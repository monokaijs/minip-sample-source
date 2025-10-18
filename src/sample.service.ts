import Innertube, {ClientType} from "youtubei.js/react-native";
import {SearchResponse, Track, VideoSearchResult} from "./types/music";
import {YTNodes} from "youtubei.js";
import CookieManager from "@react-native-cookies/cookies";

const YOUTUBE_BASE = 'https://m.youtube.com';

class SampleService {
  async start() {
  }

  async searchMusic(): Promise<SearchResponse> {
    return {
      results: [{
        id: '1',
        title: 'California Day',
        artist: 'InAudio',
        thumbnail: 'https://inaudio.org/wp-content/uploads/2025/10/400-14-150x150.jpg',
        duration: 120,
        viewCount: '123',
      }],
      nextPageToken: undefined,
    };
  }

  async getPlayableUrl(videoId: string): Promise<string> {
    return 'https://raw.githubusercontent.com/monokaijs/minip-ytb-source/refs/heads/main/music/california-day.mp3';
  }
}

export const sampleService = new SampleService();
