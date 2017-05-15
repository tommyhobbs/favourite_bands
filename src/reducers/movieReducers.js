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
            console.log('action.payload',action.payload);
            return {
                ...state,
                inputValue: action.payload
            };
        default: return state;
    }
}