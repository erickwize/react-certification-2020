import YoutubeVideos from '../../mock/youtube-videos-mock.json';
import getByQuery from './getByQuery';

jest.mock('../../utils/constants');
const constants = require('../../utils/constants');

describe('getByQuery', () => {
  it('returns a response', async () => {
    const result = await getByQuery('wizeline');
    expect(typeof result).toBe('object');
  });

  it('returns mock videos', async () => {
    constants.DEBUG = true;
    const result = await getByQuery('wizeline');
    expect(result).toMatchObject(YoutubeVideos);
  });
});
