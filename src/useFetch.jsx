import React, { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(null);
  // async and await for the fetching
  async function getData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setPending(false);
      setError(null);
    } catch (error) {
      const message = error.message ? error.message : "Something went wrong";
      setError(message);
      setPending(false);
    }
  }
  // using useEffect to fetch data from database
  useEffect(() => {
    getData(url);
  }, [url]);
  return { data, pending, error };
};

export default useFetch;
