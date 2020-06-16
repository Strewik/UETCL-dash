import { GET_DATES } from "../actions/types";

const initialState = {
    dates:[],
};

export default function(state = initialState, actions){
    switch (actions.type) {
        case GET_DATES:
        return{
            ...state,
            dates:actions.payload
        };
        default:
            return state;
    }
}