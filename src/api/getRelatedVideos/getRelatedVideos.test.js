import YoutubeVideos from '../../mock/youtube-videos-mock.json';
import getRelatedVideos from './getRelatedVideos';

jest.mock('../../utils/constants');
const constants = require('../../utils/constants');

describe('getRelatedVideos', () => {
  it('returns a response', async () => {
    const result = await getRelatedVideos('wizeline');
    expect(typeof result).toBe('object');
  });

  it('returns mock videos', async () => {
    constants.DEBUG = true;
    const result = await getRelatedVideos('wizeline');
    expect(result).toMatchObject(YoutubeVideos);
  });
});
