import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import VideoList from '../VideoList';
import VideoPlayer from '../VideoPlayer';
import { Wrapper, Related } from './VideoDetail.styled';
import { useFetch } from '../../hooks/useFetch';
import { GlobalContext } from '../../context/GlobalContext';

function VideoDetail() {
  const history = useHistory();
  const globalContext = useContext(GlobalContext);
  if (globalContext.vidId === '') {
    history.push('/');
  }
  const demoData = () => {
    const data = {
      kind: 'youtube#searchListResponse',
      etag: 'd-_lvdeQSsGExUHKsM_Pz-hcsdE',
      nextPageToken: 'CAUQAA',
      regionCode: 'MX',
      pageInfo: {
        totalResults: 112,
        resultsPerPage: 5,
      },
      items: [
        {
          kind: 'youtube#searchResult',
          etag: 'UgplOggeZsVMYJzvouXgMyGNbXo',
          id: {
            kind: 'youtube#video',
            videoId: 'Po3VwR_NNGk',
          },
          snippet: {
            publishedAt: '2019-03-05T03:43:16Z',
            channelId: 'UCXmAOGwFYxIq5qrScJeeV4g',
            title: 'Wizeline hace sentir a empleados como en casa',
            description:
              'En el 2014, Bismarck fundó Wizeline, compañía tecnológica que trabaja con los corporativos ofreciendo una plataforma para que desarrollen software de forma rápida.',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/Po3VwR_NNGk/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/Po3VwR_NNGk/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/Po3VwR_NNGk/hqdefault.jpg',
                width: 480,
                height: 360,
              },
              standard: {
                url: 'https://i.ytimg.com/vi/Po3VwR_NNGk/sddefault.jpg',
                width: 640,
                height: 480,
              },
              maxres: {
                url: 'https://i.ytimg.com/vi/Po3VwR_NNGk/maxresdefault.jpg',
                width: 1280,
                height: 720,
              },
            },
            channelTitle: 'El Economista TV',
            liveBroadcastContent: 'none',
            publishTime: '2019-03-05T03:43:16Z',
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
          etag: 'Ht0AvkxS7Se8gMLwVCVXfR4J8zU',
          id: {
            kind: 'youtube#video',
            videoId: '772_6g1rMN8',
          },
          snippet: {
            publishedAt: '2016-09-01T18:14:40Z',
            channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
            title: "Spotlight: Meet the Wizeline Mexico Team (We're Hiring!)",
            description:
              'Meet a few people from our awesome Wizeline Mexico Team: Dafne, Isabel, Fernando, Alejandro, Vivi, Alejandra, Liusha and Vidal.',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/772_6g1rMN8/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/772_6g1rMN8/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/772_6g1rMN8/hqdefault.jpg',
                width: 480,
                height: 360,
              },
              standard: {
                url: 'https://i.ytimg.com/vi/772_6g1rMN8/sddefault.jpg',
                width: 640,
                height: 480,
              },
              maxres: {
                url: 'https://i.ytimg.com/vi/772_6g1rMN8/maxresdefault.jpg',
                width: 1280,
                height: 720,
              },
            },
            channelTitle: 'Wizeline',
            liveBroadcastContent: 'none',
            publishTime: '2016-09-01T18:14:40Z',
          },
        },
        {
          kind: 'youtube#searchResult',
          etag: 'eJDTFnb3UM_mX5CTuAZZjfly4EE',
          id: {
            kind: 'youtube#video',
            videoId: 'IxGc1gSqB3A',
          },
          snippet: {
            publishedAt: '2021-02-04T17:42:25Z',
            channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
            title: 'Wizeline Data Engineering featuring Tania Reyes',
            description:
              'Tania discovered her interest in Big Data while working at Wizeline and took Wizeline Academy courses to skill up and join the data team.\n\nNow, she works on internal and external big data projects, helping people gain insights from their data. Watch the full story! \n\nWant to join our Data team? We’re always hiring. Visit wizeline.com/careers and search our open roles.',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/IxGc1gSqB3A/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/IxGc1gSqB3A/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/IxGc1gSqB3A/hqdefault.jpg',
                width: 480,
                height: 360,
              },
              standard: {
                url: 'https://i.ytimg.com/vi/IxGc1gSqB3A/sddefault.jpg',
                width: 640,
                height: 480,
              },
              maxres: {
                url: 'https://i.ytimg.com/vi/IxGc1gSqB3A/maxresdefault.jpg',
                width: 1280,
                height: 720,
              },
            },
            channelTitle: 'Wizeline',
            liveBroadcastContent: 'none',
            publishTime: '2021-02-04T17:42:25Z',
          },
        },
        {
          kind: 'youtube#searchResult',
          etag: 'e1chKRqvIIchX7yUvCkT4_KZAK8',
          id: {
            kind: 'youtube#video',
            videoId: 'c4VGUawfTTc',
          },
          snippet: {
            publishedAt: '2021-01-09T01:53:14Z',
            channelId: 'UCJBMbnskCsmAZnJiFWIYj5g',
            title: 'GUADALAJARA MÉXICO 2021 | MUCHO MÁS QUE TEQUILA Y MARIACHI',
            description:
              'Guadalajara Jalisco, se ha caracterizado por ser capital del tequila y del mariachi. Con el tiempo, se convierte en una de las áreas metropolitanas más importantes de México, este 2021 será fundamental para continuar con el crecimiento económico, social y de servicios, así también, consolidarse como una de las capitales más cruciales para el turismo. \n\nFE DE ERRATAS: del minuto 08:22 al 08:36, es la colonia Ciudad del Sol y no Paseos del Sol.\n\n#guadalajara #gdl #2021\n\nCRÉDITOS DE LAS IMÁGENES AL FINAL DEL VIDEO\n\nAgradecimiento especial a los canales:\n\n@Capital Brokers Luxury Real Estate \n@voxicide',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/c4VGUawfTTc/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/c4VGUawfTTc/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/c4VGUawfTTc/hqdefault.jpg',
                width: 480,
                height: 360,
              },
              standard: {
                url: 'https://i.ytimg.com/vi/c4VGUawfTTc/sddefault.jpg',
                width: 640,
                height: 480,
              },
              maxres: {
                url: 'https://i.ytimg.com/vi/c4VGUawfTTc/maxresdefault.jpg',
                width: 1280,
                height: 720,
              },
            },
            channelTitle: 'SOY TAPATÍO',
            liveBroadcastContent: 'none',
            publishTime: '2021-01-09T01:53:14Z',
          },
        },
      ],
    };
    const error = false;
    const loading = false;
    return { data, error, loading };
  };
  console.log('VideoDetail', globalContext.vidId);
  // Switch comments to enable API calls. Done this to save calls while testing
  const { data, error, loading } = useFetch(globalContext.vidId);
  // const { data, error, loading } = demoData();
  console.log('VideoDetail:demoData', data, error, loading);

  if (loading) return <h1>Cargando...</h1>;
  if (error) return <h1>Hola Error {JSON.stringify(error)}</h1>;

  return (
    <Wrapper>
      <VideoPlayer />
      {data && (
        <Related>
          <h3>Related videos</h3>
          {data.items && <VideoList items={data.items} related />}
        </Related>
      )}
    </Wrapper>
  );
}

export default VideoDetail;
