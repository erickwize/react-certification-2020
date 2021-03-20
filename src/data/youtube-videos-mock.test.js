import videos from './youtube-videos-mock.json';

describe('getVideosFromYoutubeMockApi', () => {
  it('should return the same size of videos registered in the results', () => {
    expect(videos.items.length).toBe(videos.pageInfo.resultsPerPage);
  });
});
