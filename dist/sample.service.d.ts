import { SearchResponse } from "./types/music";
declare class SampleService {
    start(): Promise<void>;
    searchMusic(): Promise<SearchResponse>;
    getPlayableUrl(videoId: string): Promise<string>;
}
export declare const sampleService: SampleService;
export {};
