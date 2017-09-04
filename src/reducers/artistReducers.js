const initialState = {
    Artists:[
      {
        name: 'Nirvana' ,
        popularity:80 ,
        poster: '"https://i.scdn.co/image/84282c28d851a700132356381fcfbadc67ff498b"'
      }
    ],
    inputValue: '',
    error: '',
  };

export default function reducer(state = initialState, action) {
    console.log('Reducer: action %o', action);
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
            return {
                ...state,
                Artists: [
                  ...state.Artists,
                  {
                    name: action.payload.name,
                    popularity: action.payload.popularity,
                    poster: action.payload.images[0].url
                  }
                ],
                error: ''
            };
        case 'ARTIST_FETCH_FAILURE':
            return {
                ...state,
                error: action.payload
            };
        default:
          return state;
    }
}