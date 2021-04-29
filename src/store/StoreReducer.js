import initialState from './initialState.json';

const types = {
    setThemeDark: 'change to dark',
    setThemeLight: 'change to light',
    setSectionToDetails: 'set section to details',
    setSectionToMain: 'set section to main',
    setVideoDetails: 'set video details',
    setComments: 'set comments',
    setRelatedVideos: 'set related videos',
    setVideos: 'set videos',
    addFavoriteVideo: 'add favorite video',
    removeFavoriteVideo: 'remove favorite video',
    setFromLocalStorage: 'set favorite videos from local storage',
    setSideBar: 'activate or deactivate sideBar',
    updateFavorite: 'update favorite Video'
}

const initialStore = {
    theme: "light",
    section: {
        main: true,
        videoId: "",
        imageUrl: ""
    },
    videoDetails: {
        title: "",
        description: "",
        channel: "",
        published: ""
    },
    comments: [],
    relatedVideos: [],
    videos: initialState,
    favoriteVideos: [{
        id: "",
        title: "",
        published: "2014-09-30T15:32:04Z",
        channel: "",
        description: "",
        imageUrl: ""
    }],
    sideBarEnabled: false,
    currentFav: {
        id: "",
        title: "",
        published: "2014-09-30T15:32:04Z",
        channel: "",
        description: "",
        imageUrl: ""
    }
}

const storeReducer = (state, action) => {
    switch(action.type){
        case types.updateFavorite:
            return{
                ...state,
                currentFav: action.payload,
                favoriteVideos: [...state.favoriteVideos.filter(video => video.id !== action.payload.id), action.payload]
            }
        case types.setSideBar:
            return{
                ...state,
                sideBarEnabled: !state.sideBarEnabled
            }
        case types.setFromLocalStorage:
            return{
                ...state,
                favoriteVideos: action.payload
            }
        case types.addFavoriteVideo:
            if(state.favoriteVideos[0].id === ""){
                return{
                    ...state,
                    favoriteVideos: [action.payload.video],
                    currentFav: action.payload.video
                }
            }
            return{
                ...state,
                favoriteVideos: [...state.favoriteVideos, action.payload.video],
                currentFav: action.payload.video
            }
        case types.removeFavoriteVideo: 
            return{
                ...state,
                favoriteVideos: state.favoriteVideos.filter(video => video.id !== action.payload.videoId)
            }
        case types.setVideos:
            return{
                ...state,
                videos: action.payload.videos
            }
        case types.setRelatedVideos:
            return{
                ...state,
                relatedVideos: action.payload.relatedVideos
            }
        case types.setComments:
            return{
                ...state,
                comments: action.payload.comments
            }
        case types.setVideoDetails:
            return{
                ...state,
                videoDetails:{
                    title: action.payload.title,
                    description: action.payload.description,
                    channel: action.payload.channel,
                    published: action.payload.published
                }
            }
        case types.setSectionToDetails:
            return{
                ...state,
                section: {
                    main: false,
                    videoId: action.payload.videoId,
                    imageUrl: action.payload.imageUrl
                }
            }
        case types.setSectionToMain:
            return{
                ...state,
                section: {
                    main: true,
                    videoId: ""
                }
            }
        case types.setThemeDark:
            return{
                ...state,
                theme: "dark"
            }
        case types.setThemeLight:
            return{
                ...state,
                theme: "light"
            }
        default:
        return state;
    }
}

export { initialStore, types };
export default storeReducer;