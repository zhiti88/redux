import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  DATA_CLEAR,
} from "../actions";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

// reducer
const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DATA_CLEAR:
      return {
        ...state,
        loading: false,
        data: [],
      };
    default:
      return state;
  }
};
export default dataReducer;
