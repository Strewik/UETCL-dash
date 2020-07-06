import axios from "axios";

import { GET_DATES } from "./types";

//GET DATES
export const getDates = () => (dispatch) => {
    axios
        .get("http://127.0.0.1:8000/api/dates/")
        .then((res) => {
            dispatch({
                type: GET_DATES,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
};
