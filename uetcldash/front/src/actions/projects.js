import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { GET_PROJECTS, DELETE_PROJECT, ADD_PROJECT } from "./types";
import { tokenConfig } from "./auth";

//GET PROJECTS
export const getProjects = () => (dispatch, getState) => {
  axios
    .get("api/dates/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_PROJECTS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

//DELETE_PROJECT
export const deleteProject = id => (dispatch, getState) => {
  axios
    .delete(`api/dates/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteProject: "Project Deleted" }));
      dispatch({
        type: DELETE_PROJECT,
        payload: id
      });
    })
    .catch((err => console.log(err)));
};

//ADD PROJECT
export const addProject = project => (dispatch, getState) => {
  axios
    .post("/api/dates/", project, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ addProject: "Project Added" }));
      dispatch({
        type: ADD_PROJECT,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
