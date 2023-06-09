import {
  GET_ALL_DATA_SUCESS,
  GET_DATA_ERROR,
  GET_DATA_REQUEST,
  GET_MENS_DATA_SUCESS,
  GET_MOBILE_DATA_SUCESS,
  GET_WOMENS_DATA_SUCESS,
} from "./actionType";

const initState = {
  isLoading: false,
  isError: false,
  mens_data: [],
  womens_data: [],
  mobile_data: [],
  all_data: [],
};
export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_DATA_REQUEST:
      return { ...state, isLoading: true };
    case GET_MENS_DATA_SUCESS:
      return { ...state, isLoading: false, isError: false, mens_data: payload };
    case GET_WOMENS_DATA_SUCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        womens_data: payload,
      };
    case GET_MOBILE_DATA_SUCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        mobile_data: payload,
      };
    case GET_ALL_DATA_SUCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        all_data: payload,
      };
    case GET_DATA_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
