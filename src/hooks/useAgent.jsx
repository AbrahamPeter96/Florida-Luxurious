import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAgent } from "../api/Agents";

function useAgent(id) {
  console.log(id);
  const dispatch = useDispatch();
  const { isLoading, data } = useSelector((s) => s.getAgentReducer);
  console.log(data);
  useEffect(() => {
    dispatch(getAgent(id));
  }, [dispatch]);
  return { isLoading, data };
}

export default useAgent;
