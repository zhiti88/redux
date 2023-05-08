import React from "react";
import { useDispatch } from "react-redux";
import { dataClear } from "../../Store/Dummyjson/actions";

const ClearButton = () => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(dataClear())}>CANCELLA</button>;
};

export default ClearButton;
