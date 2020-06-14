import { combineReducers } from "redux";
import dates from "./datesReducer";

export default combineReducers({
    datesReducer: dates,
});
