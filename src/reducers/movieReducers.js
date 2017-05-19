export default function reducer(
    state = {
        Movies:[
            { title: 'Toy Story', year: 1995, poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SX300.jpg"},
            { title: 'Die Hard', year: 1988, poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BYmY2ZGEwMTYtNjBmZS00OGE4LWEyMmUtNjAwMWUxZjVmZTRiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"},
            { title: 'Aliens', year: 1986, poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BYzVlMWViZGEtYjEyYy00YWZmLThmZGEtYmM4MDZlN2Q5MmRmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"}
        ],
        inputValue: '',
        error: ''
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
                Movies: [...state.Movies, {title: action.payload.Title, year: action.payload.Year, poster: action.payload.Poster }]
            };
        case 'MOVIE_FETCH_FAILURE':
            console.log(action.payload);
            return {
                ...state,
                error: action.payload
            };
        default: return state;
    }
}