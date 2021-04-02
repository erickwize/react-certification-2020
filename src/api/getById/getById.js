import { API_KEY, DEBUG } from '../../utils/constants';
import YoutubeVideo from '../../mock/youtube-video-mock.json';

const API_URL = `https://www.googleapis.com/youtube/v3/videos?type=video&part=snippet&maxResults=1&key=${API_KEY}`;

export default async function getById(videoId) {
  if (DEBUG) {
    return YoutubeVideo;
  }
  const response = await fetch(`${API_URL}&id=${videoId}`);

  const data = await response.json();

  return data;
}
