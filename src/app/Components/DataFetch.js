import React, { useEffect } from "react";

function DataFetch({ dispatch, quizName, ready }) {
  useEffect(() => {
    const getData = async (apiName) => {
      try {
        const response = await fetch(`http://localhost:8000/api/v1/${apiName}`);
        const data = await response.json();

        dispatch({
          type: "dataReceived",
          payload: data.data.questions,
        });
      } catch (error) {
        dispatch({ type: "dataFetchError", payload: [] });
      }
    };
    getData(quizName);
  }, [quizName]);
  return <div></div>;
}

export default DataFetch;
