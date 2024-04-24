import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProperties } from "../api/Property";
function useAgents() {
  const dispatch = useDispatch();
  const { isLoading, data } = useSelector((s) => s.getPropertiesReducer);
  useEffect(() => {
    if (isLoading === false) dispatch(getProperties());
  }, [dispatch]);
  return { data, isLoading };
}

export default useAgents;