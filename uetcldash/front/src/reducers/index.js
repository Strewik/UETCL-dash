import { combineReducers } from "redux";
import auth from "./auth";
import errors from "./errors";
import messages from "./messages";
import projects from "./projects";

export default combineReducers({
    auth,
    errors,
    messages,
    projects
});