import { key } from '../mockFiles/key.json';
import { types } from './StoreReducer';

export const getVideosByQuery = (query, dispatch) => {
    const fields = `items(id,snippet(publishedAt,title,description,channelTitle,thumbnails(medium(url))))`;
    fetch(`https://www.googleapis.com/youtube/v3/search?key=${key}&type=video&part=snippet&maxResults=12&q=${query}&fields=${fields}`)
        .then(resp => resp.json())
        .then(response => dispatch({
            type: types.setVideos,
            payload: {
                videos: response.items
            }
        }))
        .catch(error => console.log(error))
}

export const getRelatedVideosByVideoId = (videoId, dispatch) => {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&type=video&maxResults=10&key=${key}`)
        .then(resp => resp.json())
        .then(response => dispatch({
            type: types.setRelatedVideos,
            payload: {
                relatedVideos: response.items
            }
        }))
        .catch(error => console.log(error));
}

export const getDetailsByVideoId = (videoId, dispatch) => {
    fetch(`https://www.googleapis.com/youtube/v3/videos?key=${key}&fields=items(snippet(title,thumbnails,channelTitle,publishedAt,description))&part=snippet,statistics&id=${videoId}`)
        .then(resp => resp.json())
        .then(response => dispatch({
            type: types.setVideoDetails,
            payload: {
                title: response.items[0].snippet.title,
                description: response.items[0].snippet.description,
                channel: response.items[0].snippet.channelTitle,
                published: response.items[0].snippet.publishedAt,
                imageUrl: response.items[0].snippet.thumbnails.high.url
            }
        }))
        .catch(error => console.log(error))
}

export const getCommentsByVideoId = (videoId, dispatch) => {
    fetch(`https://www.googleapis.com/youtube/v3/commentThreads?key=${key}&textFormat=plainText&part=snippet&videoId=${videoId}&maxResults=50`)
        .then(resp => resp.json())
        .then(response => dispatch({
            type: types.setComments,
            payload: {
                comments: response.items
            }
        }))
        .catch(error => console.log(error))
}

export const openSelectedVideo = (dispatch, videoId, imageUrl) => {
    dispatch({
        type: types.setSectionToDetails,
        payload: {main: false, videoId, imageUrl }
    });
    getRelatedVideosByVideoId(videoId, dispatch);
    getDetailsByVideoId(videoId, dispatch);
    getCommentsByVideoId(videoId, dispatch);
}

export const getStatisticsById = (videoId, setState) => {
    fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${key}`)
        .then(resp => resp.json())
        .then(response => {
            const {likeCount, dislikeCount, viewCount, commentCount} = response.items[0].statistics;
            setState ({ likeCount, dislikeCount, viewCount, commentCount });
        });
}