import YoutubeVideo from '../../mock/youtube-video-mock.json';
import getById from './getById';

jest.mock('../../utils/constants');
const constants = require('../../utils/constants');

describe('getById', () => {
  it('returns an object', async () => {
    const video = YoutubeVideo.items[0];
    const result = await getById(video.id);
    expect(typeof result).toBe('object');
  });

  it('returns mock video', async () => {
    const video = YoutubeVideo.items[0];
    constants.DEBUG = true;
    const result = await getById(video.id);
    expect(result).toMatchObject(YoutubeVideo);
  });
});
