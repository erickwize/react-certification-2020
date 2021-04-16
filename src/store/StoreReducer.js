const types = {
    setThemeDark: 'change to dark',
    setThemeLight: 'change to light',
    setSectionToDetails: 'set section to details',
    setSectionToMain: 'set section to main',
    setVideoDetails: 'set video details',
    setComments: 'set comments',
    setRelatedVideos: 'set related videos',
    setVideos: 'set videos'
}

const initialStore = {
    theme: "light",
    section: {
        main: true,
        videoId: ""
    },
    videoDetails: {
        title: "",
        description: "",
        channel: "",
        published: ""
    },
    comments: [],
    relatedVideos: [],
    videos: []
}

const storeReducer = (state, action) => {
    switch(action.type){
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
                    videoId: action.payload.videoId
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