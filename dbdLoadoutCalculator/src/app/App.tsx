import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { fetchDBDData } from "../features/DBDData/dbdDataSlice";
import { SoloLayout } from "../components/Layout";

function App() {
 
  const dataStatus = useAppSelector((state) => state.data.status);
  const dispatch = useAppDispatch();

  let content;
  useEffect(() => {
    if (dataStatus === "idle") {
      dispatch(fetchDBDData());
    }
  }, [dataStatus, dispatch]);

  if (dataStatus === "loading") {
    content = <h1>Loading...</h1>;
  } else if (dataStatus === "succeeded") {
    content = <SoloLayout />;
  } else if (dataStatus === "failed") {
    content = <h1>Something went wrong!</h1>;
  }

  return content;
}

export default App;
