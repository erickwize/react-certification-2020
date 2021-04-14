import { useEffect, useContext } from 'react';
import { ytapikey } from '../utils/config';
import { GlobalContext } from '../context/GlobalContext';

export const useFetch = (videoId) => {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId.id.videoId}&type=video&maxResults=5&key=${ytapikey}`;
  const globalContext = useContext(GlobalContext);

  useEffect(() => {
    const response = {
      kind: 'youtube#searchListResponse',
      etag: 'f-EtRkhfqpt0H6of6KCrg_ALq8c',
      nextPageToken: 'CAUQAA',
      regionCode: 'MX',
      pageInfo: {
        totalResults: 109,
        resultsPerPage: 5,
      },
      items: [
        {
          kind: 'youtube#searchResult',
          etag: 'DGr7P1ipAcRwfX_ojdqQuGqIpPg',
          id: {
            kind: 'youtube#video',
            videoId: 'UTsBkhu-UGw',
          },
          snippet: {
            publishedAt: '2018-11-16T17:02:32Z',
            channelId: 'UCvaUAVzIIGsRNlUDWkQFCeA',
            title: 'AWS Wizeline Founders Campaign - Capítulo 1 - Emprendedor',
            description:
              'https://aws.amazon.com/es/campaigns/founders/\n\nQuieres saber más? Contáctenos: https://bit.ly/2G3ZbTE',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/UTsBkhu-UGw/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/UTsBkhu-UGw/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/UTsBkhu-UGw/hqdefault.jpg',
                width: 480,
                height: 360,
              },
              standard: {
                url: 'https://i.ytimg.com/vi/UTsBkhu-UGw/sddefault.jpg',
                width: 640,
                height: 480,
              },
              maxres: {
                url: 'https://i.ytimg.com/vi/UTsBkhu-UGw/maxresdefault.jpg',
                width: 1280,
                height: 720,
              },
            },
            channelTitle: 'Amazon Web Services Latin America',
            liveBroadcastContent: 'none',
            publishTime: '2018-11-16T17:02:32Z',
          },
        },
        {
          kind: 'youtube#searchResult',
          etag: 'DvjNNAzsr8UIlCvb7-U6gwnY49A',
          id: {
            kind: 'youtube#video',
            videoId: 'cjO2fJy8asM',
          },
          snippet: {
            publishedAt: '2018-09-25T17:35:23Z',
            channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
            title: 'A Day in the Life of an Engineering Manager at Wizeline',
            description:
              "Fernando Espinoza shares his experience working as an engineering manager at Wizeline and mentoring other engineers. Learn about Fernando's passions and what he values most about his role.",
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/cjO2fJy8asM/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/cjO2fJy8asM/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/cjO2fJy8asM/hqdefault.jpg',
                width: 480,
                height: 360,
              },
              standard: {
                url: 'https://i.ytimg.com/vi/cjO2fJy8asM/sddefault.jpg',
                width: 640,
                height: 480,
              },
              maxres: {
                url: 'https://i.ytimg.com/vi/cjO2fJy8asM/maxresdefault.jpg',
                width: 1280,
                height: 720,
              },
            },
            channelTitle: 'Wizeline',
            liveBroadcastContent: 'none',
            publishTime: '2018-09-25T17:35:23Z',
          },
        },
        {
          kind: 'youtube#searchResult',
          etag: 'SdU3e6-SYmBUUxSxs_FL2zUM4a0',
          id: {
            kind: 'youtube#video',
            videoId: 'qMZKfR7lo-g',
          },
          snippet: {
            publishedAt: '2020-08-04T23:54:36Z',
            channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
            title: 'Wizeline Go-To-Market Strategy | Julián Limón, Director of Solutions',
            description:
              'Director of Solutions, Julián Limón, shares how Wizeline helps its clients design and build technology solutions to help them achieve their business goals. Watch the video to learn more.',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/qMZKfR7lo-g/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/qMZKfR7lo-g/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/qMZKfR7lo-g/hqdefault.jpg',
                width: 480,
                height: 360,
              },
              standard: {
                url: 'https://i.ytimg.com/vi/qMZKfR7lo-g/sddefault.jpg',
                width: 640,
                height: 480,
              },
              maxres: {
                url: 'https://i.ytimg.com/vi/qMZKfR7lo-g/maxresdefault.jpg',
                width: 1280,
                height: 720,
              },
            },
            channelTitle: 'Wizeline',
            liveBroadcastContent: 'none',
            publishTime: '2020-08-04T23:54:36Z',
          },
        },
        {
          kind: 'youtube#searchResult',
          etag: 'lFhKKeSFMRcmdkRJo7Y4m6KO7f4',
          id: {
            kind: 'youtube#video',
            videoId: 'xFnk0ZxIrIE',
          },
          snippet: {
            publishedAt: '2017-01-04T23:06:19Z',
            channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
            title: 'Learn UX Design Fundamentals with Wizeline UX Academy',
            description:
              'Wizeline UX Academy is a 6 week course that develops select students into UX Designers via a thorough foundation in UX principles and tools. Students have weekly project deliverables, culminating in the completion of the full product life-cycle for their projects. Through these projects, students learn by doing and apply the skills and tools needed to enable them to build great products.',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/xFnk0ZxIrIE/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/xFnk0ZxIrIE/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/xFnk0ZxIrIE/hqdefault.jpg',
                width: 480,
                height: 360,
              },
              standard: {
                url: 'https://i.ytimg.com/vi/xFnk0ZxIrIE/sddefault.jpg',
                width: 640,
                height: 480,
              },
              maxres: {
                url: 'https://i.ytimg.com/vi/xFnk0ZxIrIE/maxresdefault.jpg',
                width: 1280,
                height: 720,
              },
            },
            channelTitle: 'Wizeline',
            liveBroadcastContent: 'none',
            publishTime: '2017-01-04T23:06:19Z',
          },
        },
        {
          kind: 'youtube#searchResult',
          etag: 'G92NWfwsZsCq390K5iD559vVeII',
          id: {
            kind: 'youtube#video',
            videoId: 'nmXMgqjQzls',
          },
          snippet: {
            publishedAt: '2019-09-30T23:25:15Z',
            channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
            title: 'Video Tour | Welcome to Wizeline Guadalajara',
            description:
              "Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office.\n\nIn 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, Mexico, home to over 400 employees. Wizeline has drawn attention for designing an office and culture focused on employee wellness and cultivating talent, earning a Super Espacios award by WeWork, Expansion Mexico, and Top Companies.\n\nRead more about the office here: https://www.wizeline.com/creating-first-class-facilities/\n\nIf you're interested in working with Wizeline and want to experience the culture and tour our offices live, contact us at www.wizeline.com/contact/",
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/nmXMgqjQzls/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg',
                width: 480,
                height: 360,
              },
              standard: {
                url: 'https://i.ytimg.com/vi/nmXMgqjQzls/sddefault.jpg',
                width: 640,
                height: 480,
              },
              maxres: {
                url: 'https://i.ytimg.com/vi/nmXMgqjQzls/maxresdefault.jpg',
                width: 1280,
                height: 720,
              },
            },
            channelTitle: 'Wizeline',
            liveBroadcastContent: 'none',
            publishTime: '2019-09-30T23:25:15Z',
          },
        },
      ],
    };
    /* fetch(url)
      .then((x) => x.json())
      .then((y) => {
        globalContext.video.setRelatedHandler(y);
      }); */
    // simulate a response //
    globalContext.video.setRelatedHandler(response);
  });

  return { url };
};
