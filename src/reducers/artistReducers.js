export default function reducer(
    state = {
        Artists:[
            {name: 'Nirvana' , popularity:80 , poster: '"https://i.scdn.co/image/84282c28d851a700132356381fcfbadc67ff498b"'}
        ],
        inputValue: '',
        error: '',
        accessToken: '',
    },
    action){

    switch(action.type){
        case 'ADD_ARTIST':
            return {
                ...state,
                Artists: [...state.Artists, action.payload]
            };
        case 'INPUT_CHANGE':
            return {
                ...state,
                inputValue: action.payload
            };
        case 'ARTIST_FETCH_SUCCESS':
            console.log(action.payload);
            return {
                ...state,
                Artists: [...state.Artists, {name: action.payload.name, popularity: action.payload.popularity, poster: action.payload.images[0].url }],
                error: ''
            };
        case 'ARTIST_FETCH_FAILURE':
            console.log(action.payload);
            return {
                ...state,
                error: action.payload
            };
        case 'ACCESS_TOKEN':
            console.log(action.payload);
            return {
                ...state,
                accessToken: action.payload
            };
        default: return state;
    }
}