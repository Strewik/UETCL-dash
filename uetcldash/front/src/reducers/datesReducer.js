import { GET_DATES } from "../actions/types";

const initialState = {
    dates:[],
    dates:{}
};

export default function(state = initialState, actions){
    switch (action.type) {
        case GET_DATES:
        return{
            ...state,
            dates:action.payload
        };
        default:
            return state;
    }
}