import {
  GET_PROJECTS,
  DELETE_PROJECT,
  ADD_PROJECT,
  UPDATE_PROJECT,
  GET_ONE_PROJECT
} from "../actions/types";

const initialState = {
  projects: [],
  project: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload
      };
    case GET_ONE_PROJECT:
      return {
        ...state,
        project: action.payload
      };

    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(
          project => project.id !== action.payload
        )
      };
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload]
      };
    case UPDATE_PROJECT:
      return {
        ...state,
        projects: state.projects.map(project =>
          project.id === action.payload.id ? action.payload : project
        )
      };

    default:
      return state;
  }
}
