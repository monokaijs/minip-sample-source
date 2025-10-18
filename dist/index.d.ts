interface Track {
    id: string;
    title: string;
    artist: string;
    artwork: string;
    duration: number;
    url?: string;
    videoId: string;
    isOffline?: boolean;
    localPath?: string;
    addedAt: number;
    isLoading?: boolean;
    source?: string;
}
interface VideoSearchResult {
    id: string;
    title: string;
    artist: string;
    thumbnail: string;
    duration: number;
    viewCount?: string;
}
interface SearchResponse {
    results: VideoSearchResult[];
    nextPageToken?: string;
}

interface MusicSource {
    id: string;
    name: string;
    version: string;
    initialize(): Promise<void>;
    search(query: string, pageToken?: string): Promise<SearchResponse>;
    getPlayableUrl(trackId: string, source?: string): Promise<string>;
    getSuggestions(trackId: string, size?: number): Promise<Track[]>;
    getPlaylists?(): Promise<any[]>;
    getPlaylist?(playlistId: string): Promise<any>;
    getSearchSuggestions?(query: string): Promise<string[]>;
}

declare class SampleSource implements MusicSource {
    id: string;
    name: string;
    version: string;
    initialize(): Promise<void>;
    search(query: string, pageToken: string | undefined): Promise<SearchResponse>;
    getPlayableUrl(trackId: string): Promise<string>;
    getSuggestions(trackId: string, size?: number): Promise<never[]>;
    getPlaylists(): Promise<never[]>;
    getPlaylist(playlistId: string): Promise<void>;
    getSearchSuggestions(query: string): Promise<never[]>;
}
declare const defaultSource: SampleSource;

declare const createSource: () => SampleSource;

export { createSource, defaultSource as default };
