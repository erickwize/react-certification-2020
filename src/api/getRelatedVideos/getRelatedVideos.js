import { API_KEY, DEBUG } from '../../utils/constants';
import YoutubeVideos from '../../mock/youtube-videos-mock.json';

const API_URL = `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&maxResults=10&key=${API_KEY}`;

export default async function getRelatedVideos(videoId) {
  if (DEBUG) {
    return YoutubeVideos;
  }
  const response = await fetch(`${API_URL}&relatedToVideoId=${videoId}`);

  const data = await response.json();

  return data;
}
