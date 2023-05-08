import {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure,
} from "../../Store/Dummyjson/actions";

export const fetchProducts = (dispatch) => {
  console.log("ddddd");
  dispatch(fetchDataRequest());
  fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => {
      console.dir(data);
      dispatch(fetchDataSuccess(data.products));
    })
    .catch((error) => {
      dispatch(fetchDataFailure(error.message));
    });
};

export const fetchUsers = (dispatch) => {
  console.log("users");
  dispatch(fetchDataRequest());
  fetch("https://dummyjson.com/users")
    .then((response) => response.json())
    .then((data) => {
      console.dir(data);
      dispatch(fetchDataSuccess(data.users));
    })
    .catch((error) => {
      dispatch(fetchDataFailure(error.message));
    });
};
