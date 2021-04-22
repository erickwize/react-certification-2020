import { API_KEY, API_URL } from '../utils/constants';

async function fetchSearchVideos(serach = 'wizeline') {
  try {
    let queryParams = '?part=snippet&maxResults=21';
    queryParams = `${queryParams}&q=${serach}`;

    const response = await fetch(`${API_URL}search${queryParams}&key=${API_KEY}`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

export { fetchSearchVideos };
