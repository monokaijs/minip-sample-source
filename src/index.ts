import {MusicSource} from "./types/source";
import {sampleService} from "./sample.service";

class SampleSource implements MusicSource {
  id: string = 'sample';
  name: string = 'Sample Media Source';
  version: string = '1.0.0';

  async initialize() {
    await sampleService.start();
  }

  async search(query: string, pageToken: string | undefined) {
    return sampleService.searchMusic();
  }

  async getPlayableUrl(trackId: string) {
    return sampleService.getPlayableUrl(trackId);
  }

  async getSuggestions(trackId: string, size = 10) {
    return [];
  }

  async getPlaylists() {
    return []
  }

  async getPlaylist(playlistId: string) {
  }

  async getSearchSuggestions(query: string) {
    return [];
  }
}

const defaultSource = new SampleSource();
export default defaultSource;
export const createSource = () => new SampleSource();

