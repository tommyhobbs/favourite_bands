export default function reducer(
    state = {
        Movies:[
            { title: 'Toy Story', year: 1995},
            { title: 'Die Hard', year: 1988},
            { title: 'Aliens', year: 1986},
        ],
        inputValue: ''
    },action){

    switch(action.type){
        case 'ADD_MOVIE':
            return {
                ...state,
                Movies: [...state.Movies, action.payload]
            };
        case 'INPUT_CHANGE':
            return {
                ...state,
                inputValue: action.payload
            };
        case 'MOVIE_FETCH_SUCCESS':
            console.log(action.payload);
            return {
                ...state,
                Movies: [...state.Movies, {title: action.payload.Title, year: action.payload.Year}]
            }
        default: return state;
    }
}