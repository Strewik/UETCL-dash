import axios from "axios";

import { GET_DATES } from "./types";

//GET DATES
export const getDate = (id) => (dispatch) => {
    axios
        .get("/api/leads")
        .then((res) => {
            dispatch({
                type: GET_DATES,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
};
